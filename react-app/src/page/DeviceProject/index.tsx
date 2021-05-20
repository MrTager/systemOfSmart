import { useState,useEffect,ReactElement } from 'react'
import { Input,Card } from 'antd';
import styles from './index.module.scss'
import {getDeviceProjectList} from '../../api/DeviceProject'

const { Search } = Input;
const DeviceProject:React.FC = () => {
    const [itemObj,setItemObj] = useState([])
    useEffect(()=>{
        // getDeviceProjectList()
        // console.log('请求', getDeviceProjectList())
    })
    const onSearch = (value:String) => {
        console.log(value);
        getDeviceProjectList()
        .then((res:any)=>{
            console.log(res)
            setItemObj(res.list)
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
            <div className={styles.content}>
                <header className={styles.header}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </header>
                <div className={styles.cardGroup}>
                    {itemObj.map((item:any,index:number) => 
                    <div key={index}>
                        <Card title={item.title} bordered={false} style={{ width: 300,height: 280,backgroundColor:'#141414',color:'#858585' }}>
                            <p>ID:{item.id}</p>
                            <p>设备数:{item.deviceProject}</p>
                            <p>APP数量:{item.app}</p>
                            <p>成员:{item.member}</p>
                            <p>创建日期:{item.createDate}</p>
                        </Card>
                    </div>)}
                </div>
            </div>
        </>
    )
}
export default DeviceProject;