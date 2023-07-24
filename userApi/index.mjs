import http from "http"
import fs from "fs";

const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=="/"){
     res.end("hello from the home side");
    }
    else if(req.url=="/about"){
        res.end("hello from the about side");
    }
    else if(req.url=="/contact"){
        res.end("hello from the contactus side");
    }
    else if(req.url=="/userapi"){
        fs.readFile("userapi.json","utf-8",(err,data)=>{
            console.log(data);

            //now if we want the name of the first one then we have to first convert into norml obj
            const objData=JSON.parse(data);
            res.end(objData[0].name);
        })
        // res.end("hello from the userApi sides");
       

    }
    else{
        res.writeHead(404,{"Content-type": "text/html "});// isse console pe bhi 404 error aayega and if we do not add this to n/w pe
        //hamara statuss code 200 show krega which is for success
    //     res.end("404 error page ");

 // we write this not in normal document but in html so we have to write it inside h1 tag
 res.end("<h1>404 error page</h1>"); // so we have to tell ki ye content html type hai
}

    
    
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000")
});
