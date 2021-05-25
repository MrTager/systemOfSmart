import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import { Home,Visual,DeviceProject,ProjectCategory,ProjectCategoryInfo,SmartDeviceList } from '../../router/index';
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
                    <RouterShield  path='/index/projectCategoryInfo' component={ProjectCategoryInfo}></RouterShield>
                    <RouterShield  path='/index/smartDeviceList' component={SmartDeviceList}></RouterShield>
                    <Route   component={Home}></Route>
                </Switch>
            </Router>
        </div>
    )
    
}

export default React.memo(ContentView);