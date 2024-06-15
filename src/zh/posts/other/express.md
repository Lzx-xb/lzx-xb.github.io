---
title: express框架使用
date: 2024-06-15
icon: tag
category:
  - 部署
tag:
  - express
---

# express框架使用

## express创建
[**官方问题链接**][1]
```bash
npm install express --save
```
亦可使用官网的Express 应用程序生成器`npx express-generator`

## 安装mysql依赖
```bash
npm install mysql2
```


## express 创建数据库连接池
``` js
const mysql = require('mysql2');

// 创建数据库连接
const poolConfig = {
    host: 'localhost',
    user: 'root',
    password: 'your_pwd',
    database: 'your_db',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10, // 连接池中最大连接数
    queueLimit: 0 // 最大连接请求队列长度，0 表示不限制
};
const pool = mysql.createPool(poolConfig);
module.exports = pool;
```

## express 数据库crud
```js
var express = require('express');
var router = express.Router();
const pool = require("../db/index")

router.post('/', function (req, res, next) {
  // 获取请求体
  const { name, age, gender, address } = req.body;
  // 连接数据库
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from pool:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    let sql = 'INSERT INTO student (name, age, gender, address, created_at) VALUES (?, ?, ?, ?, ?)';
    // 执行查询
    connection.query(sql, [name, age, gender, address, new Date()], (error, results) => {
      // 释放连接
      connection.release();

      if (err) {
        console.error('Error inserting into database: ' + err.stack);
        res.status(500).send('Database error');
        return;
      }
      res.redirect('/');
    });
  });
});
```

## 创建Dockerfile
```Dockerfile
# 使用官方 Node.js 运行时镜像作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /usr/src/app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 将应用代码复制到容器中
COPY . .

# 暴露应用端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]

```

## 构建镜像
使用以下命令在项目根目录下构建 Docker 镜像：
```bash
docker build -t my-express-app .
```
上述命令中的 `-t my-express-app` 是为构建的镜像指定标签，`. `表示使用当前目录下的 Dockerfile。

## 运行容器
``` bash
docker run -d -p 3000:3000 my-express-app
```
上述命令中的 -d 表示后台运行容器，-p 3000:3000 表示将容器的 3000 端口映射到主机的 3000 端口。


## 创建mysql docker-compose.yml
```bash
version: '3.8'

services:
  db:
    image: mysql:latest
    container_name: mysql_container
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: my_root_pwd
      MYSQL_DATABASE: my_db
      MYSQL_USER: user
      MYSQL_PASSWORD: user_pwd
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

## sql 初始化脚本
```sql
CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL COMMENT '学生姓名',
    age INT COMMENT '学生年龄',
    gender ENUM('male', 'female') COMMENT '学生性别',
    address VARCHAR(255) COMMENT '学生地址',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) COMMENT '学生信息表';

INSERT INTO student (name, age, gender, address, created_at)
VALUES ('李四', 22, 'female', '上海市浦东新区', NOW());
```




## 总结
后续改进
1、封装数据库连接方法
2、前后端分离，express只负责接口，不需要再express引入前端模板
3、.env 环境优化

[1]:https://www.expressjs.com.cn/starter/installing.html



