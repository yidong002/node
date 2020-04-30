//加载事件
let EventEmitter =require("events").EventEmitter;
//初始化一个事件
let event=new EventEmitter();
//打猎
event.on("打猎",function(){
    console.log("老夫聊发少年狂 左牵黄 右擎苍");
})
//触发事件
setTimeout(function(){
    console.log("会挽雕弓如满月");
    event.emit("打猎");
},4000)