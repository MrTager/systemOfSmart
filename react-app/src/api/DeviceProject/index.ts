import request from '../request'

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