import Mock from 'mockjs' 
let Random = Mock.Random
const randomNumber = Math.floor(Math.random()*(100-10))+10
let arr:Array<object> = new Array()
for(let i=0;i<randomNumber;i++){
    let item = Mock.mock({
        "title":Random.csentence(1, 10),
        "productKey":Random.word(11),
        "state":Random.extend({
            constellation: function(date) {
                var constellations = ['开发中', '已发布', '已废弃']
                return this.pick(constellations)
            }
        }),
        "category":Random.extend({
            constellation: function(date) {
                var constellations = ['插座', '开关', '灯','窗帘','无线按钮']
                return this.pick(constellations)
            }
        }),
        "module":Random.extend({
            constellation: function(date) {
                var constellations = ['BLE Mesh', 'Zigbee']
                return this.pick(constellations)
            }
        }),
        "createDate":Random.date('yyyy-MM-dd'),
        "image":Random.image('100x100')
    })
    arr.push(item)
}

let list = {
    list:arr
}
export default list;