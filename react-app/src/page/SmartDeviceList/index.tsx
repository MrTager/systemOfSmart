import React,{useState,useEffect} from 'react'
import {getDeviceList} from '../../api/Device'
import { Select,Table,Spin   } from 'antd';
import styles from './index.module.scss'
import './index.scss'
const { Option } = Select;

const SmartDeviceList:React.FC = () => {
    const [pageLoading,setPageLoading] = useState(false)

    const [allDeviceNum,setAllDeviceNum] = useState(0)
    const [activationDeviceNum,setActivationDeviceNum] = useState(0)
    const [liveDeviceNum,setLiveDeviceNum] = useState(0)

    const deviceCategoryArray:Array<string> = ['开关类','窗帘类','温控器','安防类','插座类'];
    const [selectArray,setSelectArray] = useState(deviceCategoryArray)
    const handleChange = () => {}

    const columns = [
        {
            title: 'DeviceName',
            dataIndex: 'deviceName',
            key: 'deviceName',
        },
        {
            title: '设备名',
            dataIndex: 'projectName',
            key: 'projectName',
        },
        {
            title: '所属品类',
            dataIndex: 'type',
            key: 'type',
        },{
            title: '状态',
            dataIndex: 'state',
            key: 'state',
        },{
            title: '最后上线时间',
            dataIndex: 'createDate',
            key: 'createDate',
        }
      ];
    const [dataMode,setDataMode] = useState(columns)
    const [dataBody,setDataBody] = useState([])
    useEffect(()=>{
        getDeviceList()
        .then((res:any)=>{
            setDataBody(res.list)
            setAllDeviceNum(res.allDeviceNum)
            setActivationDeviceNum(res.activationDeviceNum)
            setLiveDeviceNum(res.liveDeviceNum)
            setPageLoading(true)
        })
    },[])
    return (
        <>
            {
                pageLoading ? 
                <>
                    <header>设备列表页面</header>
                    <div className={styles.info}>
                        <div>
                            <Select defaultValue={selectArray[0]} style={{ width: 120 }} onChange={handleChange}>
                                {
                                    selectArray.map((item,index) => {
                                        return <Option value={item} key={index}>{item}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div>
                            <span>设备总数:</span><br/>
                            <span>{allDeviceNum}</span>
                        </div>
                        <div>
                            <span>激活设备:</span><br/>
                            <span>{activationDeviceNum}</span>
                        </div>
                        <div>
                            <span>当前在线:</span><br/>
                            <span>{liveDeviceNum}</span>
                        </div>
                    </div>
                    <div>
                        <Table columns={dataMode} dataSource={dataBody} />
                    </div>
                </>
                :
                <Spin size="large"/>
            }
                 
        </>
    )
}

export default SmartDeviceList;