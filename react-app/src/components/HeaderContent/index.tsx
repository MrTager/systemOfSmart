import React from 'react'
import { Popover,Avatar } from 'antd'
import { UserOutlined,MenuFoldOutlined } from '@ant-design/icons';
import styles from './index.module.scss'
/**
 * 
 * @returns 头部栏组件
 */
const HeaderContent = () => {
    const [userInfoVisible,changeUserInfoVisible] = React.useState<any>(false)
    const hoverContent = <div>This is hover content.</div>;
    return (
        <div className={styles.box}>
            <div className={styles.leftContent}>
                <MenuFoldOutlined style={{fontSize:'20px'}}/>
            </div>
            <div className={styles.rightContent}>
                <ul>
                    <li>
                        <button>主题切换</button>
                    </li>
                    <li>
                        <Popover
                            style={{ width: 500 }}
                            content={hoverContent}
                            title="Hover title"
                            trigger="hover"
                            visible={userInfoVisible}
                            onVisibleChange={changeUserInfoVisible}
                        >
                            <Avatar size={50} icon={<UserOutlined />} />  
                        </Popover>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default HeaderContent;