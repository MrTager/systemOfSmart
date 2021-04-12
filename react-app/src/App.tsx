import React,{ useState } from 'react';
import { Route,Switch,Redirect,HashRouter } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import './App.css';
import { Login,NotFind,Index } from './router/index'
import RouterShield from './components/RouterShield'

function App() {
  return (
    
    <div className="App">
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <HashRouter>
            <Switch>
              <Route exact path='/login' component={Login}></Route>
              <RouterShield  path='/' component={Index}></RouterShield>
              <RouterShield  path='/index' component={Index}></RouterShield>
              <Route   component={NotFind}></Route>
            </Switch>
          </HashRouter>
        </ConfigProvider>
    </Provider>
    </div>
  );
}

export default App;
