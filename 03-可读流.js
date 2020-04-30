//引入模块
let fs=require('fs');
//定义数据容器
let data='';
//创建可读流
let readStream=fs.createReadStream("03-可读流.js");
//处理读取事件
readStream.on("data",function(chunk){
    data +=chunk;
})
//结束
readStream.on("end",function(){
    console.log(data);
})
//出现错误
readStream.on("error",function(err){
    console.log(err);
})