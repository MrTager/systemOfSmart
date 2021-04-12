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
        <ConfigProvider locale={zhCN}>
<<<<<<< HEAD
         {/* {renderRoutes(routers)} */}
          <Switch>
      hasCookie ?
        (<Route exact path='/' component={Index}></Route>)
        :
        (<Route exact path='/login' component={Login}></Route>)
      </Switch>
=======
          <HashRouter>
            {renderRoutes(routers)}
          </HashRouter>
>>>>>>> 92fdb01a11712e2c5d27b3c634f674e082faa5c2
        </ConfigProvider>
    </Provider>
    </div>
  );
}

export default App;
