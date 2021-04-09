import React,{ lazy,LazyExoticComponent,Suspense} from 'react'
import {Redirect} from 'react-router-dom'
import Index from '../page/Index'
// const Index = lazy(() => import('../page/Index'));
const Login = lazy(() => import('../page/Login'));
const NotFind = lazy(() => import('../page/404'))

const SuspenseComponent = (Component:LazyExoticComponent<any>) => ( props:any ) => (
            <Suspense fallback={null}>
                <Component {...props}></Component>
            </Suspense>
)


const routers = [
    {
        path:'/',
        component:Index,
        routes:[
            {
                path: "/",
                exact: true,
                render: () => <Redirect to={"/login"}/>
            },
            {
                path:'/login',
                component:SuspenseComponent(Login),
                
            },
            {
                path:'/404',
                component:SuspenseComponent(NotFind),
                
            }
        ]
    },
    
]
export default routers;