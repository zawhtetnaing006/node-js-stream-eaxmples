const fs = require("fs")

const highWaterMark = 30;
let chunkCount = 1;

const readStream = fs.createReadStream("100mb-sample.txt",{
    encoding: 'UTF-8',
    highWaterMark: 100000 //20mb for maxBufferedSize
});

const writeStream = fs.createWriteStream("copy-100mb-sample.txt",{
    highWaterMark: 100001 
})

readStream.on('data',(chunk)=>{
    const result = writeStream.write(chunk);
    console.log(chunk.length);
    if(result) {
        console.log('writing');
    } else {
        console.log('waiting');
        readStream.pause();
    }
})

writeStream.on("drain",()=>{
    console.log('drain');
    // readStream.resume();
})

