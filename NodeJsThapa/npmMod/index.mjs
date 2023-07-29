//lecture 13-->npm {chalk and validator}

// Importing the chalk module
// import chalk from 'chalk';

// console.log(chalk.red('Hello world!'));
// // //we can also create our custom variables..
// console.log(chalk.blue.italic.underline("heya buddies!"))
// //mjs means modular js 
// console.log(chalk.blue.italic.inverse("heya buddies!"))  //it does the bg color blue and change the color of text
// console.log(chalk.green.italic.underline("success"))

//now with the help of email how can we do com[plete form] validation..
// validator
// import chalk from 'chalk';
// import validator from 'validator';
// const res=validator.isEmail("thapa@thapa.com");
// console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));

//lecture 14-->globalmodule in node js-->nodemon....

//lecture 15--->module wrapper function..
// const name="tanisha";
// console.log(name);
//in node js every individual file is called module and us file k ander jo bhi var aur functions banate 
//hai vo sb private hote hai..to vo private kyu ho rkkhe hai 
//and we want to see ki vo behind me kese run ho rhe hai..so for tht we have to use
// ()---->this is a grouping operator....

// (function(exports,require,module,__filename,__dirname){
//     const name="tanisha";
// console.log(name);
// })

//to jb hm above code ko run krte hai to nodejs usko module wrapper func k ander run krdeta hai..n bcoz of thia
//func iske ander saare variables private hote hai...
//bcoz of iife ---[immediately invoked func expression]
// console.log(__dirname)..

//lecture 16-->creating our own web http web server...
// import http from "http"

// const server=http.createServer((req,res)=>{
//     res.end("hello from the other side");
// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port no 8000")
// });

//lecture 17--->node js routing...

//we knw that jb bhi user kuch type krega we will be able to see here in our terminal..for tht we use
//req.url..


// import http from "http"

// const server=http.createServer((req,res)=>{
//     // console.log(req.url);
//     if(req.url=="/"){
//      res.end("hello from the home side");
//     }
//     else if(req.url=="/about"){
//         res.end("hello from the about side");
//     }
//     else if(req.url=="/contact"){
//         res.end("hello from the contactus side");
//     }
//     else{
//         res.writeHead(404,{"Content-type": "text/html "});// isse console pe bhi 404 error aayega and if we do not add this to n/w pe
//         //hamara statuss code 200 show krega which is for success
//     //     res.end("404 error page ");

//  // we write this not in normal document but in html so we have to write it inside h1 tag
//  res.end("<h1>404 error page</h1>"); // so we have to tell ki ye content html type hai
// }

    
    
// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port no 8000")
// });


//lecture 18---->complete json in node js..

// json stands for js object Notification, json is a light weight format for storing and transporting data
// json is often used when data is sent from a server to a web page..

