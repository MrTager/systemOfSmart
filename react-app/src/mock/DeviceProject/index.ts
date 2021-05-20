const Mock = require('mockjs')

const projectList = Mock.mock(require('./projectList.json'))

export default [
    {
        url:'/deviceProject/projectList',
        type:'post',
        response:(config:any) => {
            return projectList
        }
    }
]