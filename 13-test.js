//加载事件模块
let EventEmitter=require("events").EventEmitter;
//加载事件
let event = new EventEmitter();
//创建事件
event.on("work",function(){
    console.log("敲代码")
})
event.emit("work");

//匿名函数
function lunch(food){
    console.log("我想吃："+food);
}
//执行函数
function execute(type,food){
    return type(food)
}
execute(lunch,'肉')