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
/**
 * 
 * @returns device category list
 */
 export const getDeviceCategoryList = () => {
    return request({
        url:'/deviceProject/projectCategoryList',
        method:'post',
        data:{}
    })
}
/**
 * 
 * @returns device Info list
 */
 export const getProjectCategoryInfo = () => {
    return request({
        url:'/deviceProject/projectCategoryInfo',
        method:'post',
        data:{}
    })
}