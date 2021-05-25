import {useState,useEffect} from 'react'
import {getDeviceCategoryList} from '../../api/DeviceProject'
import {Link} from 'react-router-dom'
import { Card } from 'antd';
import styles from './index.module.scss'
const ProjectCategory:React.FC = () => {
    const [projectTitle,setProjectTitle] = useState('') 
    const [projectNumber,setProjectNumber] = useState(0) 
    const [projectList,setProjectList] = useState([])
    useEffect(()=>{
        getDeviceCategoryList()
        .then((res:any)=>{
            setProjectTitle(res.projectName)
            setProjectNumber(res.projectNum)
            setProjectList(res.list)
        })
    },[])
    return (
        <>
            <header className={styles.header}>
                <span className={styles.title}>{projectTitle}</span>
                <div className={styles.item_1}>
                    <span>设备总数</span><br/>
                    <span>{projectNumber}</span>
                </div>
            </header>
            <div className={styles.body}>
                <div className={styles.group}>
                    {projectList.map((item:any,index:number) => 
                    <div className={styles.card} key={index}>
                        <Link to='/index/projectCategoryInfo'>
                            <Card title={'项目名称:'+item.title} bordered={false} headStyle={{border:'none',color:'#858585',fontWeight:'bold'}} style={{ width: 400,height: 250,backgroundColor:'#141414',color:'#858585'}}>
                                <img src={item.image} alt="设备实物图" />
                                <ul>
                                    <li>ProductKey:{item.productKey}</li>
                                    <li>状态:{item.state}</li>
                                    <li>品类:{item.category}</li>
                                    <li>模组:{item.module}</li>
                                    <li>创建日期:{item.createDate}</li>
                                </ul>
                            </Card>
                        </Link>
                    </div>)}
                </div>
           
            </div>
        </>
    )
}
export default ProjectCategory;