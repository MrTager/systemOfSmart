import request from '../request'

export interface IprojectList {
    title:string,
    id:string,
    deviceProject:number,
    app:number,
    member:number,
    createDate:string

}
/**
 * 
 * @returns device list
 */
export const getDeviceList = () => {
    return request({
        url:'/deviceProject/deviceList',
        method:'post',
        data:{}
    })
}
