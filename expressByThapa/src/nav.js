const express=require("express");
const app=express();
const port = 3000;

// app.get("/",(req,res)=>{
//     res.send("welcome to my home page");
// });

// app.get("/about",(req,res)=>{
//     res.send("welcome to my about page");
// });
// app.get("/contact",(req,res)=>{
//     res.send("welcome to my contact page");
// });
// app.get("/temp",(req,res)=>{
//     res.send("welcome to my temp page");
// });

// app.listen(port,()=>{
//   console.log(`listening to the port no ${port}`);
// });

//lecture 28--->how to send html and json data as a response using express js

app.get("/",(req,res)=>{
    res.write("<h1>Welcome to my home page</h1>");
    res.write("<h1>Welcome to my home page again</h1>");//when we have to show on;y two three lines of html
        res.send();
    });
  

//to pass json object..
app.get("/temp",(req,res)=>{
    //     res.send([{ //we can pass array of objects jo hme stringify krkre data send krta hai..
    //         id:1,
    //         name:"tanisha",
    //     },
    //     {
    //         id:1,
    //         name:"tanisha",
    //     },
    //     {
    //         id:1,
    //         name:"tanisha",
    //     }
    // ]);


    //we can also use res.json too..same result is shown..
    res.json([{ //we can pass array of objects jo hme stringify krkre data send krta hai..
        id:1,
        name:"tanisha",
    },
    {
        id:1,
        name:"tanisha",
    },
    {
        id:1,
        name:"tanisha",
    }
]);
    });



app.listen(port,()=>{
  console.log(`listening to the port no ${port}`);
});


