//输出一段信息
function print(msg){
    console.log("输出是："+msg);
}
//print("000")
//执行函数的函数 execute
function execute(fn,msg){
    console.log("print 执行")
    return fn(msg);
}
execute(print,"0000");
//匿名函数
execute(function(msg){
    console.log("匿名输出："+msg);
},"这是匿名函数的值")