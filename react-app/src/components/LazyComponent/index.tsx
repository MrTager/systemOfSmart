import React,{ lazy,LazyExoticComponent,Suspense} from 'react'
import { Skeleton } from 'antd';
const headerContent = lazy(() => import('../HeaderContent'));
const devPropsDefinition = lazy(() => import('../DevPropsDefinition'));

const SuspenseComponent = (Component:LazyExoticComponent<any>) => ( props:any ) => (
            <Suspense fallback={<Skeleton active />}>
                <Component {...props}></Component>
            </Suspense>
)
export const HeaderContent = SuspenseComponent(headerContent);
export const DevPropsDefinition = SuspenseComponent(devPropsDefinition);
