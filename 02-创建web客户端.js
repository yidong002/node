//引入http模块
var http=require('http');

//配置请求参数
var options={
    host:'localhost',
    port:'8090',
    path:'/index.html'
};
//处理响应的回调函数
var callback=function(response){
    //不断更新数据
    var body='';
    response.on('data',function(data){
        body+=data;
    });
    response.on('end',function(){
        //数据接收完成
        console.log(body);
    });
}
//向服务器发送请求
var req=http.request(options,callback);
req.end();