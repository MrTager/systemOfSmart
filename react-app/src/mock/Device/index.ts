import Mock from 'mockjs'

import deviceList from './deviceList'


export default [
    {
        url:'/deviceProject/deviceList',
        type:'post',
        response:(config:any) => {
            return deviceList
        }
    },
  
]
