const fs = require('fs');
const mongo = require('../db/mongo');
// 要写入的数据
// const data = 'Hello, this is some text I want to write to a file.\nAnd this is another line of text.';

// // 文件路径
// const filePath = './output.txt';


async function writeToFile(client, db, tb) {
    // let dataList = await mongo.findOne(client, db, tb, data)
    let dataList = await mongo.findAll(client, db, tb)
    const dataStr = dataList.map(item => JSON.stringify(item)).join('\n');
    return dataStr
}

module.exports = {
    writeToFile
}