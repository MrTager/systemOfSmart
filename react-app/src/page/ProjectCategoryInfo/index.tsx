
import {DevPropsDefinition} from '../../components/LazyComponent'
import styles from './index.module.scss'
import { Steps,Tabs } from 'antd';
import './index.scss'
const { Step } = Steps;
const { TabPane } = Tabs;
const ProjectCategoryInfo:React.FC = () => {
    const changeTag = () => {

    }
    return (
        <>
        <Tabs defaultActiveKey="1" onChange={changeTag}>
            <TabPane tab="功能定义" key="1">
                <DevPropsDefinition></DevPropsDefinition>
            </TabPane>
            <TabPane tab="人机交互" key="2">
            Content of Tab Pane 2
            </TabPane>
            <TabPane tab="设备测试" key="3">
            Content of Tab Pane 3
            </TabPane>
        </Tabs>
    </>
    )
}
export default ProjectCategoryInfo;