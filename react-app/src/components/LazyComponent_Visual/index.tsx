import React,{ lazy,LazyExoticComponent,Suspense} from 'react'
const visualLineChartDeviceActive = lazy(() => import('../VisualLineChartDeviceActive'));


const SuspenseComponent = (Component:LazyExoticComponent<any>) => ( props:any ) => (
            <Suspense fallback={null}>
                <Component {...props}></Component>
            </Suspense>
)
export const VisualLineChartDeviceActive = SuspenseComponent(visualLineChartDeviceActive);
