import Mock from 'mockjs' 
let Random = Mock.Random
const randomNumber = Math.floor(Math.random()*(100-10))+10
let arr:Array<object> = new Array()
Random.extend({
    state: function(date) {
        let constellations = ['开发中', '已发布', '已废弃']
        return this.pick(constellations)
    },
    category:function(date) {
        let constellations = ['插座', '开关', '灯','窗帘','无线按钮']
        return this.pick(constellations)
    },
    module:function(date) {
        let constellations = ['BLE Mesh', 'Zigbee']
        return this.pick(constellations)
    }    
})
Random.state();
Random.category();
Random.module();
for(let i=0;i<randomNumber;i++){
    let item = Mock.mock({
        "deviceName":Random.csentence(1, 20),
        "productKey":Random.word(11),
        "state":"@STATE",
        "category":"@CATEGORY",
        "module":"@MODULE",
        "createDate":Random.date('yyyy-MM-dd'),
        "type":"设备"
    })
    arr.push(item)
}

let list = {
    allDeviceNum:513542,
    activationDeviceNum:183642,
    liveDeviceNum:51230,
    list:arr
}
export default list;