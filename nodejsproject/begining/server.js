/**
 * Created by qimengmeng on 16/12/26.
 */
const http = require('http');//引入http这个模块

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //调用http的createServer
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');//设置返回内容的文本类型
res.end('Hello nodejs\n');//结束响应
});

server.listen(port, hostname, () => {//监听一个端口
    console.log(`Server running at http://${hostname}:${port}/`);
});