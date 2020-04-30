//引入读取文件模板
let fs=require("fs");

fs.readFile("test.txt",function(err,data){
    if(err){
        console.error(err)
    };
    console.log(data)
})
//读取文件信息
// let data=fs.readFileSync("test.txt");
// console.log(data);
console.log("读取完毕");