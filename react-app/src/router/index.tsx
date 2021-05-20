import React,{ lazy,LazyExoticComponent,Suspense} from 'react'
const index = lazy(() => import('../page/Index'));

const login = lazy(() => import('../page/Login'));
const notfind = lazy(() => import('../page/404'));
const home = lazy(() =>  import('../page/Home'));
const visual = lazy(() => import('../page/Visual'));
const smartDevice = lazy(() => import('../page/DeviceProject'));

const SuspenseComponent = (Component:LazyExoticComponent<any>) => ( props:any ) => (
            <Suspense fallback={null}>
                <Component {...props}></Component>
            </Suspense>
)
export const Login = SuspenseComponent(login);
export const NotFind = SuspenseComponent(notfind);
export const Index = SuspenseComponent(index);
export const Home = SuspenseComponent(home);
export const Visual = SuspenseComponent(visual);
export const SmartDevice = SuspenseComponent(smartDevice);