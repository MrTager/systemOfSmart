import react, { Component, FC } from 'react'
import {Route,Redirect} from 'react-router-dom'
import isCookie from '../../utils/routerGuard'
import { Login,NotFind } from '../../router/index'
import { pathToFileURL } from 'node:url'
import { Components } from 'antd/lib/date-picker/generatePicker'

interface Icomponent {
    component:any,
    path:string
}

const RouterShield = ({component,path}:Icomponent) =>{
   return isCookie ? 
    (
        <Route path={path} component={component}/> 
    )
    : (
        <Redirect to='/login' />
    )
    
}
export default RouterShield;