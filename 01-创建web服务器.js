//引入http/fs/url模块
var http=require('http');
var fs = require('fs')
var url=require('url');

//创建服务器
http.createServer(function(request,response){
    //解析请求，包括文件名
    var pathname=url.parse(request.url).pathname;
    //输出请求的文件名
    console.log("Request for" + pathname +"received");
    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err);
            //如果读取错误响应
            response.writeHead(404,{'Content-Type':'text/html'});
        }else{
            //如果读取成功响应
            response.writeHead(200,{'Content-Type':'text/html'});
            //响应文件内容
            response.write(data,toString());
        }
        //发送响应参数
        response.end();
    })
}).listen(8090);
//控制台输出
onclose.log('Server running at http://127.0.0.1:8090/');
