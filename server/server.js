
const fs = require('fs');
const mongo = require('../db/mongo');
const expt = require('../files/index')


addDatainfo = async (client,db,tb,data) => {
    return await mongo.insetOne(client, db, tb, data)
}
deletePage = async (ObjectId,client,db,tb,data) => {
    console.log(data);
    data.ids.forEach (async item => {
       mongo.deleteOne(client, db, tb, {_id: new ObjectId(item)})
    })
    
}
getareaList = async (client, db, tb,data) => {
    return await mongo.findOne(client, db, tb, data)
}
exprotTxt = async (client,db,tb,res) => {
    let list = await expt.writeToFile(client, db, tb)
    let content = list.split('\n').map(item => {
        return (JSON.parse(item).name + '\n')
    })
    let txt = content.join('')
    const filePath = './files/output.txt';
    // 将字符串写入TXT文件
    await fs.writeFile(filePath, txt, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Error generating the file');
        }

        // 提供文件下载
        res.download(filePath, 'output.txt', (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error downloading the file');
            }
            // 可选：下载后删除文件
            fs.unlinkSync(filePath);
        });
    });



}

module.exports = {
    addDatainfo,
    deletePage,
    getareaList,
    exprotTxt
}