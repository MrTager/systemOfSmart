import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import { Home,Visual } from '../../router/index';
import RouterShield from '../../components/RouterShield';
function ContentView(){
    return (
        <div>
            <Router>
                <Switch> 
                    <RouterShield  path='/index/main' component={Home}></RouterShield>
                    <RouterShield  path='/index/visual' component={Visual}></RouterShield>
                    <Route   component={Home}></Route>
                </Switch>
            </Router>
        </div>
    )
    
}

export default React.memo(ContentView);