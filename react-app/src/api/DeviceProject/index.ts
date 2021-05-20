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
 * @returns device project list
 */
export const getDeviceProjectList = () => {
    return request({
        url:'/deviceProject/projectList',
        method:'post',
        data:{}
    })
}