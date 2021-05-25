import Mock from 'mockjs'

import projectList from './projectList'
import projectCategoryList from './projectCategoryList'
import projectCategoryInfo from './projectCategoryInfo'

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
    },
    {
        url:'/deviceProject/projectCategoryInfo',
        type:'post',
        response:(config:any) => {
            return projectCategoryInfo
        }
    }
]
