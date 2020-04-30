//家在模块
let EventEmitter=require("events").EventEmitter;
//初始化一个事件
let event=new EventEmitter();
//事件
event.on("大厦",function(){
    console.log("大厦很高")
})
event.once("大厦",function(){
    console.log("高可通天")
})
//触发
event.emit("大厦");
setTimeout(function(){
    event.emit("大厦");
},4000)