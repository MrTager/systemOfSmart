const Koa = require('koa')
const app = new Koa()
const koa2Req = require('koa2-request')

const httpRequest = async (address) => {
    // const addr = encodeURI(address)
    let url = `http://www.weather.com.cn/data/sk/101010100.html`
    var options = {
      method: 'get',
      url: url,
      json: {
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  
    const res = await koa2Req(options)
    console.log(JSON.stringify(res))
    return res
  }
  const aaa = httpRequest
app.use(async ( ctx ) => {
    console.log(aaa);
    ctx.body = 'hello koa'
})

app.listen(9999)
console.log("服务器启动成功")