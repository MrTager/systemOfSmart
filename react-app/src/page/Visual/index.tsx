
import { memo } from 'react'
import styles from  './index.module.scss'
import { VisualLineChartDeviceActive } from '../../components/LazyComponent_Visual'

/**
 * 可视化面板
 */
const Visual = () => {
    return (
        <div className={styles.visualPanel}>
            <button>全屏显示</button>
            <div className={styles.panelContent}>
                <header>可视化面板</header>
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
            
        </div>
    )
}
export default Visual;
