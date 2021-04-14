import {Route,Redirect,useHistory  } from 'react-router-dom'
import isCookie from '../../utils/routerGuard'

interface Icomponent {
    component:any,
    path:string
}

const RouterShield = ({component,path}:Icomponent) =>{
    return true ? <Route exact path={path} component={component}/>: <Redirect to='/login' />
}

export default RouterShield;