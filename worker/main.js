// main.js
const { Worker } = require('worker_threads');

function createWorkerWithData(data) {

  const worker = new Worker('./index.js');

  worker.postMessage(data);

  worker.on('error', (err) => {
    console.error('Worker 错误:', err);
  });

  worker.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Worker 停止，退出码：${code}`);
    }
  });

  return worker;
}

// 假设这是你要写入的数据数组
const dataArray = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];

// 为每个数据项创建一个 Worker 线程进行处理
dataArray.forEach((data) => {
  createWorkerWithData(data);
});
module.exports = {
    createWorkerWithData
}
