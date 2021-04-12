import React,{ useState } from 'react';
import { Route,Switch,Redirect,HashRouter } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import './App.css';
import Login from './page/Login'
import Index from './page/Index'
import routers from './router/index'
import hasCookie from './assets/utils/routerGuard'
import { renderRoutes } from 'react-router-config'

function App() {
  return (
    
    <div className="App">
      
      {/* <Switch>
      hasCookie ?
        (<Route exact path='/' component={Index}></Route>)
        :
        (<Route exact path='/login' component={Login}></Route>)
      </Switch> */}
      <Provider store={store}>
      <HashRouter>
        <ConfigProvider locale={zhCN}>
         {/* {renderRoutes(routers)} */}
          <Switch>
      hasCookie ?
        (<Route exact path='/' component={Index}></Route>)
        :
        (<Route exact path='/login' component={Login}></Route>)
      </Switch>
        </ConfigProvider>
      </HashRouter>
    </Provider>
    </div>
  );
}

export default App;
