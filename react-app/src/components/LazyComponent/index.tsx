import React,{ lazy,LazyExoticComponent,Suspense} from 'react'
const headerContent = lazy(() => import('../HeaderContent'));


const SuspenseComponent = (Component:LazyExoticComponent<any>) => ( props:any ) => (
            <Suspense fallback={null}>
                <Component {...props}></Component>
            </Suspense>
)
export const HeaderContent = SuspenseComponent(headerContent);
