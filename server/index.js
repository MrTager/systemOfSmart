const Koa = require('koa')
const app = new Koa()
app.use(async ( ctx ) => {
    ctx.body = 'hello koa'
})

app.listen(9999)
console.log("服务器启动成功")