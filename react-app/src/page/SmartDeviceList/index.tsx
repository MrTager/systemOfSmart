import React,{useState,useEffect} from 'react'
import {getProjectCategoryInfo} from '../../api/DeviceProject'
import { Select,Table  } from 'antd';
import styles from './index.module.scss'
import './index.scss'
const { Option } = Select;

const SmartDeviceList:React.FC = () => {
    const deviceCategoryArray:Array<string> = ['开关类','窗帘类','温控器','安防类','插座类'];
    const [selectArray,setSelectArray] = useState(deviceCategoryArray)
    const handleChange = () => {}

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
            console.log("结果",res)
            setDataBody(res.list)
        })
    })
    return (
        <>
            <header>设备列表页面</header>
            <div className={styles.info}>
                <div>
                    <Select defaultValue={selectArray[0]} style={{ width: 120 }} onChange={handleChange}>
                        {
                            selectArray.map(item => {
                                return <Option value={item}>{item}</Option>
                            })
                        }
                    </Select>
                </div>
                <div>
                    <span>设备总数:</span><br/>
                    <span>100</span>
                </div>
                <div>
                    <span>激活设备:</span><br/>
                    <span>92</span>
                </div>
                <div>
                    <span>当前在线:</span><br/>
                    <span>33</span>
                </div>
            </div>
            <div>
                <Table  columns={dataMode} dataSource={dataBody} />
            </div>
            
                   
        </>
    )
}

export default SmartDeviceList;