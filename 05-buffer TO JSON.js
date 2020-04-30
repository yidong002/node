//创建缓冲区旧的方式
let buffer=new Buffer(10);
console.log(buffer);

//新的方式
let newBuffer=Buffer.alloc(10);
console.log(newBuffer);
let buf=Buffer.from([10,20,30,40,50]);
console.log(buf);