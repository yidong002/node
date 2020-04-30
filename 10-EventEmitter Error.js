//加载请求
let EventEmitter=require("events").EventEmitter;
//初始化事件
let event=new EventEmitter();
event.on("error",function(){
    console.log("自定义的error");
})
event.emit('error');