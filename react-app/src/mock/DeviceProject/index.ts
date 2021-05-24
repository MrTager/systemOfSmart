import Mock from 'mockjs'

import projectList from './projectList'
import projectCategoryList from './projectCategoryList'

export default [
    {
        url:'/deviceProject/projectList',
        type:'post',
        response:(config:any) => {
            return projectList
        }
    },
    {
        url:'/deviceProject/projectCategoryList',
        type:'post',
        response:(config:any) => {
            return projectCategoryList
        }
    }
]
