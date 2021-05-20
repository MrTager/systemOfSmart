// const Mock = require('mockjs')
import Mock from 'mockjs'

const deviceProject = require('./DeviceProject').default

const mocks = [
    ...deviceProject
]
for(const i of mocks){
    Mock.mock(i.url,i.type,i.response)
}
Mock.setup({
    timeout:2000
})