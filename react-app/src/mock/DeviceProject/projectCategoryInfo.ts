import Mock from 'mockjs' 
let Random = Mock.Random
const randomNumber = Math.floor(Math.random()*(20-10))+3
let arr:Array<object> = new Array()
Random.extend({
    prop: function(date) {
        let constellations = [{
            type:'属性',
            name:'开关_1',
            flag:'powerstate_1',
            dataType:'bool(布尔型)',
            dataValue:['0-关闭','1-打开']
        },{
            type:'属性',
            name:'开关_2',
            flag:'powerstate_2',
            dataType:'bool(布尔型)',
            dataValue:['0-关闭','1-打开']
        },{
            type:'属性',
            name:'开关_3',
            flag:'powerstate_3',
            dataType:'bool(布尔型)',
            dataValue:['0-关闭','1-打开']
        },{
            type:'属性',
            name:'开关类型',
            flag:'switch_type',
            dataType:'enum (枚举型)',
            dataValue:['0 - Self_reset_switch','1 - Rocker_switch']
        },{
            type:'属性',
            name:'断电记忆',
            flag:'power_off_memory',
            dataType:'enum (枚举型)',
            dataValue:['0 - 全关','1 - 全开','2 - 断电记忆']
        },{
            type:'属性',
            name:'指示灯状态',
            flag:'indicator',
            dataType:'enum (枚举型)',
            dataValue:['0 - none','1 - relay','2 - pos']
        },{
            type:'属性',
            name:'总开关',
            flag:'switch_all',
            dataType:'bool(布尔型)',
            dataValue:['0-关闭','1-打开']
        }]
        return this.pick(constellations)
    },   
})
Random.prop();
for(let i=0;i<randomNumber;i++){
    let item = Mock.mock('@PROP')
    arr.push(item)
}

let list = {
    list:arr
}
export default list;