import React,{FC} from 'react'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import { Home,Index } from '../../router/index';
import RouterShield from '../../components/RouterShield';
function ContentView(){
    return (
        <div>
            <Router>
                <Switch> 
                    <RouterShield  path='/index/main' component={Home}></RouterShield>
                    <Route   component={Home}></Route>
                </Switch>
            </Router>
        </div>
    )
    
}

export default React.memo(ContentView);