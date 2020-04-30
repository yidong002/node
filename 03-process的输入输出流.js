//初始时它是被暂停的，要想从标准输入读取数据
process.stdin.resume();
process.stdin.on("data",function(data){
    proces.stdout.write("输出的数据是:"+data);
})