
import styles from  './index.module.scss'
import { VisualLineChartDeviceActive } from '../../components/LazyComponent_Visual'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

/**
 * 可视化面板
 */
const Visual:React.FC = () => {
    const handle = useFullScreenHandle();
    const handleToggle = handle.enter;
    const bgColor_dark = '#141414' //变量保存用于主题切换
    return (
        <div className={styles.visualPanel} style={{backgroundColor:bgColor_dark}} >
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
