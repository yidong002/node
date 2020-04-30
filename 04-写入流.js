//引入模块
let fs=require('fs');
//定义写入数据
let data='任何数据';
//创建可写流
let writeStream=fs.createWriteStream('output.txt');

//写入数据编码
writeStream.write(data,'UTF-8');

//写入结束
writeStream.end();
writeStream.on('finish',function(){
    console.log('写入结束');
})