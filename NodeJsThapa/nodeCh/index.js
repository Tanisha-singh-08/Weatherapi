// //challenge 1-->CRUD operation using FS module

// //1. create a folder named it thapa..
// //2.create a file in it named bio.txt and add data into it..
// //3.add morre data into the file at the end of the existing data..
// //4.read the data without getting the buffer data at first..  use [file encoding]
// //5.rename the file..
// //6.now delete both the file and the folder..

// //C---->create
// //U--->update
// //R---->read
// //D---->delete

// //1.
// const fs=require("fs");
// // fs.mkdirSync("thapa");

// //2.
// // fs.writeFileSync("thapa/bio.txt","heya my name is tanisha singh"); //to add the data in another folder..

// //3.to append the file
// // fs.appendFileSync("thapa/bio.txt","plz subscribe to my channel")

// //4.
// // const data=fs.readFileSync("thapa/bio.txt","utf8");
// // console.log(data);

// //5.
// // fs.renameSync("thapa/bio.txt","thapa/bilogy.txt")

// //6.
// // fs.unlinkSync("thapa/bilogy.txt")//to delete the file
// fs.rmdirSync("thapa");



