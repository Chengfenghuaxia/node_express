// worker.js
const { parentPort } = require('worker_threads');
const { MongoClient } = require('mongodb');


// MongoDB 连接 URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function writeToDatabase(data) {
    
  try {
    await client.connect();
    const db = client.db('ceshiDB');
    const collection = db.collection('Mydata');
    const result = await collection.insertOne(data);
    console.log(`数据写入成功，文档ID：${result.insertedId}`);
  } catch (err) {
    console.error('数据库写入失败:', err);
  } finally {
    await client.close();
  }
}

// 从主线程接收数据
parentPort.on('message', (data) => {
  writeToDatabase(data);
});
