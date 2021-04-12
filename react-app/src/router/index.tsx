import React,{ lazy,LazyExoticComponent,Suspense} from 'react'
const index = lazy(() => import('../page/Index'));

const login = lazy(() => import('../page/Login'));
const notfind = lazy(() => import('../page/404'))

const SuspenseComponent = (Component:LazyExoticComponent<any>) => ( props:any ) => (
            <Suspense fallback={null}>
                <Component {...props}></Component>
            </Suspense>
)


// const routers = [
//     {
//         path:'/',
//         component:Index,
//     },
//     {
//         path:'/login',
//         component:SuspenseComponent(Login),
        
//     },
//     {
//         path:'/404',
//         component:SuspenseComponent(NotFind),
        
//     }
// ]
// export default routers
export const Login = SuspenseComponent(login);
export const NotFind = SuspenseComponent(notfind);
export const Index = SuspenseComponent(index);