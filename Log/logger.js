const winston = require('winston');

// 创建一个logger实例
const logger = winston.createLogger({
    level: 'info', // 设置默认日志级别
    format: winston.format.combine(
      winston.format.timestamp({ // 添加时间戳
        format: 'YYYY-MM-DD HH:mm:ss' // 自定义时间格式
      }),
      winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`) // 自定义输出格式
    ),
    transports: [
      new winston.transports.Console(), // 输出到控制台
      new winston.transports.File({ filename: './Log/combined.log' }) // 输出到文件
    ]
  });

module.exports = logger;
