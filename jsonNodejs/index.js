// //lecture 18---->
// const fs=require("fs");


// //we are creating an object and had to convert it into json format..
// const bioData={
//     age:23,
//     name:"tanisha",
//     channel :"thapa technical"
// };
// // // console.log(bioData.channel);
// // //we have to convert in json object which is very easy..
// // const jsonData=JSON.stringify(bioData); 
// // console.log(jsonData);

// // //now to convert the json object into normal format we can use parse method of json 
// // const objData=JSON.parse(jsonData);
// // console.log(objData); //here the key is not enclosed in inverted commas...


// // Tasks------
// //1: convert to jsom
// //2.dusre file me add krdena
// //3.readfile
// //4.again convert back to js object original
// //5.console.log

// const jsonData=JSON.stringify(bioData);//if we want to add json data then file shud be .json only..
// //and we have to pass the cb function ki yaha pe koi error aaya h ya ni aaya..
// // fs.writeFile("json1.json",jsonData,(err)=>{
// // console.log("done")
// // })

// fs.readFile("json1.json","utf-8",(err,data)=>{
//     // console.log(data);
//     //now to convert in original obj
//     const orgData=JSON.parse(data);
//     console.log(orgData);
// })

