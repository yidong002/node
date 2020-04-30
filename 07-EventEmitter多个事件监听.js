//加载事件模块
let EventEmitter=require("events").EventEmitter;
//初始化一个事件
let event=new EventEmitter();
event.on("李白",function(){
    console.log("仰天大笑出门去,我辈岂是蓬蒿人");
})
event.on("李白",function(){
    console.log("五花马千金裘，呼儿将出换美酒");
})

event.on("网络散文",function(){
    console.log("携子之手，与子偕老");
})
event.addListener("徐志摩",function(){
    console.log("再别康桥");
})
event.emit("李白");
//触发事件
setTimeout(function(){
    console.log('这是散文');
    event.emit("网络散文")
},2000)
setTimeout(function(){
    console.log("徐志摩");
    event.emit("徐志摩");
},5000)