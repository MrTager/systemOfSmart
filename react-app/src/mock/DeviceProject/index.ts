import Mock from 'mockjs'

import projectList from './projectList'

export default [
    {
        url:'/deviceProject/projectList',
        type:'post',
        response:(config:any) => {
            return projectList
        }
    }
]