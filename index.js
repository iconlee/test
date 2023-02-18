const pinyin=require('pinyin')
const port = process.env.PORT || 80
let msg=pinyin.pinyin('中文测试')
if(1==0){
    const express = require('express')
    const app = express()
    app.get('/', (req, res) => {
        res.send('欢迎使用icontest33 '+msg+' 微信云托管！')
    })


    app.listen(port, () => {
        console.log('服务启动成功，端口：', port)
    })
}else{
    const Koa = require('koa');
    const app = new Koa();
    const router = require('koa-router')();
    app.use(async (ctx, next) => {
        console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
        await next();
    })
    router.get('/',async (ctx, next) => {
        ctx.response.body = `<h1>欢迎使用icontest33 ${msg} 微信云托管！</h1>`
    })
    router.get('/hello/:name', async (ctx, next) => {
        var name = ctx.params.name;
        ctx.response.body = `<h1>Hello, ${name}</h1>`
    })
    app.use(router.routes());
    app.listen(port);
}


