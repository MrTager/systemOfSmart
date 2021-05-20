import Mock from 'mockjs' 
let Random = Mock.Random
const randomNumber = Math.floor(Math.random()*(100-10))+10
let arr:Array<object> = new Array()
for(let i=0;i<randomNumber;i++){
    let item = Mock.mock({
        "title":Random.csentence(1, 10),
        "id":Random.word(15),
        "deviceProject":Random.natural(1, 100),
        "app":Random.natural(0, 3),
        "member":Random.natural(1, 50),
        "createDate":Random.date('yyyy-MM-dd')
    })
    arr.push(item)
}

let list = {
    list:arr
}
export default list;