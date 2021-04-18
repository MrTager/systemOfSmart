
import styles from  './index.module.scss'

/**
 * 可视化面板
 */
const Visual = () => {
    return (
        <div className={styles.visualPanel}>
            <button>全屏显示</button>
            <div className={styles.panelContent}>
                <header>物联网可视化面板</header>
                <div className={styles.body}>
                    这是body
                </div>
                
            </div>
            
        </div>
    )
}
export default Visual;