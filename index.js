const express = require('express')
const app = express()
const pinyin=require('pinyin')

app.get('/', (req, res) => {
    let msg='中文测试'
    msg=pinyin.pinyin(msg)
    res.send('欢迎使用icontest33 '+msg+' 微信云托管！')
})

const port = process.env.PORT || 80
app.listen(port, () => {
    console.log('服务启动成功，端口：', port)
})
