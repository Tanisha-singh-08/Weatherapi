//lecture 10--->OS modules to get operating system info...
const os=require("os");
console.log(os.arch()); //to see which os architecture we use arch() is a method

// const free_mem=os.freemem();
// // console.log(free_mem);

// console.log(`${free_mem / 1024 / 1024 / 1024}`); //to conver into gb

// const total_mem=os.totalmem();


// console.log(`${total_mem / 1024 / 1024 / 1024}`);


console.log(os.hostname()); //name of our desktop
console.log(os.platform());
console.log(os.type());

