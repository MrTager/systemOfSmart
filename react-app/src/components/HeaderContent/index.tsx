
import './index.scss'
import { Avatar } from 'antd'
import { UserOutlined,MenuFoldOutlined } from '@ant-design/icons';
/**
 * 
 * @returns 头部栏组件
 */
const HeaderContent = () => {
    return (
        <div className="box">
            <div className="leftContent">
                <MenuFoldOutlined style={{fontSize:'20px'}}/>
            </div>
            <div className="rightContent">
                <ul>
                    <li ><Avatar size={50} icon={<UserOutlined />} /></li>
                </ul>
            </div>
        </div>
    )
}
export default HeaderContent;