import { useState,useEffect,ReactElement } from 'react'
import { Input } from 'antd';
import styles from './index.module.scss'
import {getDeviceProjectList,IprojectList} from '../../api/DeviceProject'

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
    const listItem = (arr:Array<object>) => {
        arr.map( (item,index) => {
            <div key={index}>{item}</div>
        })
        return arr
    }
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
                <div>
                    {listItem(itemObj)}
                </div>
            </div>
        </>
    )
}
export default DeviceProject;