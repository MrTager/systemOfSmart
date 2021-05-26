import {useState,useEffect} from 'react'
import {getProjectCategoryInfo} from '../../api/DeviceProject'
import {Table,Spin } from 'antd'
import styles from './index.module.scss'
import './index.scss'
/**props definition */
const DevPropsDefinition:React.FC = () => {
    const [pageLoading,setPageLoading] = useState(false)
    const columns = [
        {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },{
            title: '标识符',
            dataIndex: 'flag',
            key: 'flag',
        },{
            title: '数据类型',
            dataIndex: 'dataType',
            key: 'dataType',
        },{
            title: '数据定义',
            dataIndex: 'dataValue',
            key: 'dataValue',
        },
      ];

    const [dataMode,setDataMode] = useState(columns)
    const [dataBody,setDataBody] = useState([])
    useEffect(()=>{
        getProjectCategoryInfo()
        .then((res:any)=>{
            setDataBody(res.list)
            setPageLoading(true)
        })
    },[])
    return (
        <>
            {
                pageLoading ?
                <>
                    <div className={styles.content}>
                        <Table key='num'  columns={dataMode} dataSource={dataBody} />
                    </div> 
                </>
                :
                <Spin size='large'/>
            }
            
        </>
    )
}
export default DevPropsDefinition;