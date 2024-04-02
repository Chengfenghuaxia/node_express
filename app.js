const express = require('express');
const cors = require('cors');
const server = require('./server/server')
const app = express();
const port = 3000; // 服务器监听的端口
const { MongoClient, ObjectId } = require('mongodb');
const logger = require('./Log/logger');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect();
const db = 'ceshiDB';
const tb = 'Mydata'
// 使用默认配置允许所有跨域请求
app.use(cors());
app.use(express.json());



app.post('/api/addoneArea', async (req, res) => {
    // 获取查询参数
    const params = req.body;
    console.log(params);
    let result = await server.addDatainfo(client, db, tb, req.body)
    logger.info("查看日志输出")
    res.send({
        code: 200,
        msg: 'success',
        data: result
    });
})
app.post('/api/pageArea', async (req, res) => {
    logger.error("这是错误日志")
    // 获取查询参数
    const params = req.body;
    console.log(params);
    let result = await server.getareaList(client, db, tb, req.body)
    res.send({
        code: 200,
        msg: 'success',
        data: {
            list: result,
            total: result.length
        }
    });
})
app.post('/api/deletePage', async (req, res) => {
    let result = await server.deletePage(ObjectId, client, db, tb, req.body)
    res.send({
        code: 200,
        msg: 'success',
        data: result
    });
})
app.get('/api/exprotTxt', async (req, res) => {
    server.exprotTxt(client, db, tb, res)
})

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
