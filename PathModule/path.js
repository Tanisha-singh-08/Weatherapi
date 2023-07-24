//lecture 11-->path modules in node js
const path=require("path");
console.log(path.dirname("D:/nodejsComplete/PathModule/path.js")); //shows the directory name
console.log(path.extname("D:/nodejsComplete/PathModule/path.js")); //show the extension of the file 
console.log(path.basename("D:/nodejsComplete/PathModule/path.js")); //show the name of the file..
const my_path=console.log(path.parse("D:/nodejsComplete/PathModule/path.js"));
console.log(my_path.name);