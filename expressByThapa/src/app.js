// const express=require("express");
// const app=express();
// const path=require("path");

//now we want ki we have a homepage so whenevr someone visits to ur homepage then we want to say hello from the express
//so we were using http for routing but here it is much simplified..

//with the help of express, we create api but inside it there are some functions--->
//get-->to read the data from the server
//post->to create a new data
//put-->to update the data
//delete-->to delete the data..

// app.get(route,callback) // means route jese  / hai to homepage pe jaane pr aapko kya show krwanaa h
//we have to give it inside callback..



// app.get("/",(req,res)=>{
//     res.send("hello from the express");
// })

// app.get("/about",(req,res)=>{
//     res.send("hello from the about page");
// })
// app.listen(8000,()=>{
//     console.log("listing the port at 8000");
// });

//lecture 29--->serve html css and js file in express..

// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));
// const staticPath=path.join(__dirname,"../public")

// app.use(express.static(staticPath));


// app.get("/",(req,res)=>{
//     res.send("hello from the express");
// })

// app.get("/about",(req,res)=>{
//     res.send("hello from the about page");
// })
// app.listen(8000,()=>{
//     console.log("listing the port at 8000");
// });


//lecture 30--->  <------responsive site using html css and express----->
// const express=require("express");
// const app=express();
// const port=8000;
// const path=require("path");

// const paths=(path.join(__dirname,"../public"));

// app.use(express.static(paths));
// app.get("/",(req,res)=>{
//   res.send("hello from the express server");
// })

// app.listen(port,()=>{
//   console.log(`listening to the port ${port}`);
// })


//lecture 31--->template engines(ejs,hbs and pugs)....

// const express=require("express");
// const app=express();
// const port=8000;
// const path=require("path");
// const hbs=require("hbs");



// const paths=(path.join(__dirname,"../public"));
// const templatePath=(path.join(__dirname,"../templates"));

// //to set the view engine..
// app.set("view engine","hbs");
// app.set("views",templatePath);

// //we have to define the template engine route...
// app.get("/",(req,res)=>{
//   res.render("index.hbs");
// })

// app.get("/about",(req,res)=>{
//   res.render("about.hbs");
// })

// // app.use(express.static(paths));
// app.get("/",(req,res)=>{
//   res.send("hello from the express server");
// })

// app.listen(port,()=>{
//   console.log(`listening to the port ${port}`);
// })


//lecture 33------>using partials in express
// const express=require("express");
// const app=express();
// const port=8000;
// const path=require("path");
// const hbs=require("hbs");



// const paths=(path.join(__dirname,"../public"));
// const templatePath=(path.join(__dirname,"../templates/views"));
// const partialsPath=(path.join(__dirname,"../templates/partials"));

// //to set the view engine..
// app.set("view engine","hbs");
// app.set("views",templatePath);
// hbs.registerPartials(partialsPath);

// //we have to define the template engine route...
// app.get("/",(req,res)=>{
//   res.render("index.hbs");
// })

// app.get("/about",(req,res)=>{
//   res.render("about.hbs");
// })

// // app.use(express.static(paths));
// app.get("/",(req,res)=>{
//   res.send("hello from the express server");
// })

// app.listen(port,()=>{
//   console.log(`listening to the port ${port}`);
// })

//lecture 34----> adding 404 error page 
// const express=require("express");
// const app=express();
// const port=8000;
// const path=require("path");
// const hbs=require("hbs");



// const paths=(path.join(__dirname,"../public"));
// const templatePath=(path.join(__dirname,"../templates/views"));
// const partialsPath=(path.join(__dirname,"../templates/partials"));

// //to set the view engine..
// app.set("view engine","hbs");
// app.set("views",templatePath);
// hbs.registerPartials(partialsPath);

// //we have to define the template engine route...
// app.get("/",(req,res)=>{
//   res.render("index.hbs");
// })

// app.get("/about",(req,res)=>{
//   res.render("about.hbs");
// })

// app.get("/about*",(req,res)=>{
//   res.render("404.hbs")
// })

// // app.use(express.static(paths));


// app.listen(port,()=>{
//   console.log(`listening to the port ${port}`);
// })

//lecture 36---->express js + API  practise set----(get temperature of the mentioned city)
const express=require("express");
const app=express();
const port=8000;
const path=require("path");
const hbs=require("hbs");
const requests=require("requests");



const paths=(path.join(__dirname,"../public"));
const templatePath=(path.join(__dirname,"../templates/views"));
const partialsPath=(path.join(__dirname,"../templates/partials"));

//to set the view engine..
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

//we have to define the template engine route...
app.get("/",(req,res)=>{
  res.render("index.hbs");
})

app.get("/about",(req,res)=>{
  requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=e3eef335bc88efc742247ac190aa2495`
  )
    .on('data',(chunk)=> {
       const objdata=JSON.parse(chunk);
       const arrData=[objdata];
       console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`)
       // console.log(arrData[0].main.temp);
      
       res.write(arrData[0].name);
    })
    .on('end',(err)=> {
      if (err) return console.log('connection closed due to errors', err);
      res.end();
     
     
    });
    });


app.get("/about*",(req,res)=>{
  res.render("404.hbs")
})

// app.use(express.static(paths));


app.listen(port,()=>{
  console.log(`listening to the port ${port}`);
})