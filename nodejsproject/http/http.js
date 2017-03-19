/**
 * Created by qimengmeng on 17/1/3.
 */
var http=require('http')

http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('hellonodejs')
    res.end()
})
.listen(2015)