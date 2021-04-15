import React,{FC} from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import Home from '../../page/Home'
function ContentView(){
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/main' component={Home}></Route>
                </Switch>
            </Router>
        </>
    )
    
}

export default React.memo(ContentView);