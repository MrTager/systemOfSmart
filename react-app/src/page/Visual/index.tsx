
import { memo,useState } from 'react'
import styles from  './index.module.scss'
import { VisualLineChartDeviceActive } from '../../components/LazyComponent_Visual'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

/**
 * 可视化面板
 */
const screenStyle:object = {
    width:"100%",
    height:"100%",
    backgroundColor:"yellow",
}
const screenStyle_full:object = {
    position:"fixed",
    width:"100%",
    height:"100%",
    backgroundColor:"red"
}
interface FullScreenHandle {
    active: boolean;
    // Specifies if attached element is currently full screen.
  
    enter: () => Promise<void>;
    // Requests this element to go full screen.
  
    exit: () => Promise<void>;
    // Requests this element to exit full screen.
  
    node: React.MutableRefObject<HTMLDivElement | null>;
    // The attached DOM node
  }
  interface FullScreenProps {
    handle: FullScreenHandle;
    // Handle that helps operate the full screen state.
  
    onChange?: (state: boolean, handle: FullScreenHandle) => void;
    // Optional callback that gets called when this screen changes state.
    
    className?: string;
    // Optional prop allowing you to apply a custom class name to the FullScreen container
  }
const Visual:React.FC = () => {
    const handle = useFullScreenHandle();
    const handleToggle = handle.enter;
    return (
        <div className={styles.visualPanel} >
            <button onClick={()=>handleToggle()}>全屏显示</button>
            <FullScreen handle={handle}>
            <div className={styles.panelContent}>
                <header></header>
                <div className={styles.body}>
                    <div className={styles.side}>
                        <div className={styles.sideBox}>
                            <VisualLineChartDeviceActive/>
                        </div>
                    </div>
                    <div className={styles.center}>中</div>
                    <div className={styles.side}>右</div>
                </div>
            </div>
            </FullScreen>
        </div>
    )
}
export default Visual;
