import Mock from 'mockjs'

import deviceList from './deviceList'


export default [
    {
        url:'/device/deviceList',
        type:'post',
        response:(config:any) => {
            return deviceList
        }
    },
  
]
