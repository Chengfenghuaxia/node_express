async function insetOne(client,dbName, tb, data) {
    const db = client.db(dbName);
    const collection = db.collection(tb);
    await collection.createIndex({ name: 1 }, { unique: true });
    const insertResult = await collection.insertOne(data);
    console.log(insertResult);
    return insertResult
}
async function insertMany(client,dbName, tb, list) {
    const db = client.db(dbName);
    const collection = db.collection(tb);
    const insertResult = await collection.insertMany(list);
    console.log(insertResult);
    return insertResult
}

async function findOne(client,dbName, tb, where) {
    const db = client.db(dbName);
    const collection = db.collection(tb);
    let M = {}
    if(where.name){
        M.name = where.name
    }
      const findResult = await collection.find(M).skip((where.page - 1) * where.limit).limit(where.limit).toArray();
    return findResult
}
async function findAll(client,dbName, tb) {
    const db = client.db(dbName);
    const collection = db.collection(tb);
    const findResult = await collection.find().toArray();
    console.log(findResult);
    return findResult
}
async function deleteOne(client,dbName, tb, where) {
    const db = client.db(dbName);
    const collection = db.collection(tb);
    const findResult = await collection.deleteOne(where);

    console.log(findResult);
    return findResult
}
async function deleteMany(client,dbName, tb, where) {
    const db = client.db(dbName);
    const collection = db.collection(tb);
    const findResult = await collection.deleteMany(where);

    console.log(findResult);
    return findResult
}
module.exports = {
    insetOne,
    insertMany,
    findOne,
    findAll,
    deleteOne,
    deleteMany
}