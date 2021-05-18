import { lazy,LazyExoticComponent,Suspense} from 'react'
import { Skeleton } from 'antd';
const visualLineChartDeviceActive = lazy(() => import('../VisualLineChartDeviceActive'));


// const loading = () => (
    
// )
const SuspenseComponent = (Component:LazyExoticComponent<any>) => ( props:any ) => (
            <Suspense fallback={<Skeleton active />}>
                <Component {...props}></Component>
            </Suspense>
)
export const VisualLineChartDeviceActive = SuspenseComponent(visualLineChartDeviceActive);
