// //lecture5-->
// const fs=require("fs");

// //creating a new file--->
// fs.writeFileSync('read.txt',"welcome to my channel");//agr ye file exist krta hai to add this data else create 
// //the file and add the data..

// //now we have written same file and added the another content..so what happens now
// fs.writeFileSync('read.txt',"thapa technical, Welcome to our playlist");//if the file already exists..
// //it overwrites the data that is existing..

// //to append the data in the existing file---->
// fs.appendFileSync("read.txt", " how are you I am fine thank you....")

// //to read the data of another file i.e read.txt...>
// const buf_data=fs.readFileSync("read.txt");
// // console.log(buf_data);

// {/* <Buffer 74 68 61 70 61 20 74 65 63 68 6e 69 63 61 6c 2c 20 57 65 6c 63 6f 6d 65 20 74 6f 20 6f 75 72 20 70 6c 61 79 6c 69 73 74 20 68 6f 77 20 61 72 65 20 79 ... 26 more bytes> */}

// //node.js includes an additional data type called buffer.
// //(not available in browsers js)..
// //Buffer is mainly used to store binary data..
// //wile reading from a file or receiving packages over the network...

// const org_data=buf_data.toString();//we have to convert the data into string first..
// console.log(org_data);

// //to rename the file
// fs.renameSync("read.txt","readwrite.txt");