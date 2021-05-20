import { useEffect } from 'react'
import { Input } from 'antd';
import styles from './index.module.scss'
import {getDeviceProjectList} from '../../api/DeviceProject'

const { Search } = Input;
const DeviceProject:React.FC = () => {
    useEffect(()=>{
        // getDeviceProjectList()
        console.log('请求', getDeviceProjectList())
    })
    const onSearch = (value:String) => console.log(value);
    const listItem = (arr:Array<object>) => {
        arr.map( item => {
            return (<div>{item}</div>)
        })
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
                    {listItem}
                </div>
            </div>
        </>
    )
}
export default DeviceProject;