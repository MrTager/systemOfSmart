import React,{ useState } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom'
import './App.css';
import Login from './page/Login'
import Index from './page/Index'
import hasCookie from './assets/utils/routerGuard'


function App() {
  return (
    <div className="App">
      <Switch>
      hasCookie ?
        (<Route exact path='/' component={Index}></Route>)
        :
        (<Route exact path='/login' component={Login}></Route>)
      </Switch>
    </div>
  );
}

export default App;
