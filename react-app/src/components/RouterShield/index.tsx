import {Route,Redirect,useHistory  } from 'react-router-dom'
import isCookie from '../../utils/routerGuard'

interface Icomponent {
    component:any
    path?:string
}

const RouterShield = ({component:Component,...rest}:Icomponent) => (
        <Route {...rest} render={(props:any):any=>{
            true ? <Component {...props}/> : 
            <Redirect to={{
                pathname:'/login'
            }}/>
        }}/>
    )


export default RouterShield;