import React from 'react'
import { Popover,Avatar } from 'antd'
import { UserOutlined,MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import styles from './index.module.scss'
import {useDispatch,useSelector} from 'react-redux'
import {RootState} from '../../store/index'
import {toggle} from '../../store/Modules/Index/action'

/**
 * @returns 头部栏组件
 */
const HeaderContent = () => {
    const dispatch = useDispatch()
    const {collapsed} = useSelector((state:RootState)=>({
        collapsed:state.index.sideToggle
    }))
    const changeToggle = () => {
        dispatch(toggle())
    }
    const [userInfoVisible,changeUserInfoVisible] = React.useState<any>(false)
    const hoverContent = <div>This is hover content.</div>;
    return (
        <div className={styles.box}>
            <div className={styles.leftContent} onClick={changeToggle}>
                {collapsed ? <MenuUnfoldOutlined style={{fontSize:'20px'}}/> : <MenuFoldOutlined style={{fontSize:'20px'}}/>}
            </div>
            <div className={styles.rightContent}>
                <ul>
                    {/* <li>
                        <button >主题切换</button>
                    </li> */}
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