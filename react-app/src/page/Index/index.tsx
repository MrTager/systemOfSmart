import React,{useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from 'react-router-dom'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './index.scss'
import ContentView from '../../components/ContentView';
import { Home } from '../../router/index';
import { HeaderContent } from '../../components/LazyComponent'
import RouterShield from '../../components/RouterShield';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;




const Index = () => {
    const [collapsed,setCollapsed] = useState(false)
    const onCollapse = (collapsed:boolean) => {
        setCollapsed(collapsed);
    };
    return (
        <div className='index-page' style={styles.page}>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to='/index/main'>主页</Link>
                    </Menu.Item> */}
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link to='/index/visual'>数据大屏</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="智能设备">
                    <Menu.Item key="3">
                        <Link to='/index/main'>设备品类</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='/index/main'>子设备</Link>
                    </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="用户运营">
                    <Menu.Item key="6">
                        <Link to='/index/main'>用户运营信息</Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to='/index/main'>工单查询</Link>
                    </Menu.Item>
                    </SubMenu>
                 
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} >
                    <HeaderContent />
                </Header>
                <Content style={{ margin: '0 16px',textAlign:'left' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <ContentView/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>WEBSIDE ©2018 CREATED BY MRTAGER</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

const styles = {
    page:{
        width:'100%',
        height:'100%',
        backgroundColor:"#f5f5f6",
        border:'1px solid rgba(0,0,0,0)'
    }
}

export default React.memo(Index)