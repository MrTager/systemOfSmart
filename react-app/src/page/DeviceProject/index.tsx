import { useState,useEffect,ReactElement } from 'react'
import { Input,Card,Spin } from 'antd';
import {Link} from 'react-router-dom'
import styles from './index.module.scss'
// import './index.scss'
import {getDeviceProjectList} from '../../api/DeviceProject'
require('./index.scss')
const { Search } = Input;
const DeviceProject:React.FC = () => {
    const [pageLoading,setPageLoading] = useState(false)
    const [itemObj,setItemObj] = useState([])
    useEffect(()=>{
        getDeviceProjectList()
        .then((res:any)=>{
            console.log(res)
            setItemObj(res.list)
        })
    },[])
    const onSearch = (value:String) => {
        console.log(value);
        getDeviceProjectList()
        .then((res:any)=>{
            setItemObj(res.list)
            setPageLoading(true)
        })
    }
    // const listItem = (arr:Array<object>) => {
    //     arr.map( (item,index) => {
    //         <div key={index}>{item}</div>
    //     })
    //     return arr
    // }
    return (
        <>
            {
                pageLoading ?
                <>
                    <div className={styles.content}>
                        <header className={styles.header}>
                            <Search
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"
                                size="large"
                                onSearch={onSearch}
                                style={{backgroundColor:'#141414'}}
                            />
                        </header>
                        <div className={styles.cardGroup}>
                            {itemObj.map((item:any,index:number) => 
                            <div className={styles.card} key={index}>
                                <Link to='/index/projectCategory'>
                                    <Card title={'项目名称:'+item.title} bordered={false} headStyle={{border:'none'}} style={{ width: 300,height: 280,backgroundColor:'#141414',color:'#858585'}}>
                                        <p>ID:{item.id}</p>
                                        <p>设备数:{item.deviceProject}</p>
                                        <p>APP数量:{item.app}</p>
                                        <p>成员:{item.member}</p>
                                        <p>创建日期:{item.createDate}</p>
                                    </Card>
                                </Link>
                            </div>)}
                        </div>
                    </div>
                </>
                :
                <Spin/>
            }
            
        </>
    )
}
export default DeviceProject;