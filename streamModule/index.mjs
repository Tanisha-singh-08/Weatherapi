

import { error } from "console";
import fs from "fs";
import http from "http";
const server=http.createServer();
server.on("request",(req,res)=>{
//     // var fs=require("fs");

//     //this is the old way of reading the data..

//     fs.readFile("input.txt",(err,data)=>{
//         if(err)
//         return console.log(err);
//         res.end(data.toString());
//     });

//     //another method of streaming..
//     // 2 way
// //readingfrom a stream
// //create a readable stream 
// //hadle stream events-> data ,end , and error

// const rstream=fs.createReadStream("inputss.txt");
// rstream.on("data",(chunkdata)=>{
//   res.write(chunkdata);
// })
// rstream.on("end",()=>{
//     res.end();
// })
   
// //if koi esi file ko read krna hai jo exist ni krti hai to error bhi show krna hai hme
// rstream.on("error",(err)=>{
//     console.log(err);
//     res.end("file not found");
// })

//3rd way...
const rstream=fs.createReadStream("input.txt");
rstream.pipe(res); //the parameter is destination ki hme read krne k sth sth kaha write krwana hai to 
//usko hme rsposne me write krwana hai,...
});

server.listen(8000,"127.0.0.1");


