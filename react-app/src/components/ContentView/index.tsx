import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import { Home,Visual,DeviceProject,ProjectCategory } from '../../router/index';
import RouterShield from '../../components/RouterShield';
function ContentView(){
    return (
        <div>
            <Router>
                <Switch> 
                    <RouterShield  path='/index/main' component={Home}></RouterShield>
                    <RouterShield  path='/index/visual' component={Visual}></RouterShield>
                    <RouterShield  path='/index/deviceProject' component={DeviceProject}></RouterShield>
                    <RouterShield  path='/index/projectCategory' component={ProjectCategory}></RouterShield>
                    <Route   component={Home}></Route>
                </Switch>
            </Router>
        </div>
    )
    
}

export default React.memo(ContentView);