import React,{ useState } from 'react';
import { Route,Switch,Redirect,HashRouter } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import './App.css';
import Index from './page/Index'
import { Login,NotFind } from './router/index'
import RouterShield from './components/RouterShield'
import hasCookie from './utils/routerGuard'
import { renderRoutes } from 'react-router-config'

function App() {
  return (
    
    <div className="App">
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <HashRouter>
            <Switch>
              <Route exact path='/login' component={Login}></Route>
              <RouterShield path='/' component={Index}></RouterShield>
            </Switch>
          </HashRouter>
        </ConfigProvider>
    </Provider>
    </div>
  );
}

export default App;
