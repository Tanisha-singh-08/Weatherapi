// //lecture 20--->events modules

// //we have to create a class called EventEmitter..
// const EventEmitter=require("events");
//  //and now we will create an object with the help of this class.
//  const event=new EventEmitter();

// //  event.on("sayMyName",()=>{
// //     console.log("ur name is vinod"); //means hum kya chahte hai event ko fire krne k baad...
// //  })
// //  //we have done a couple of callbacks too...
// //  event.on("sayMyName",()=>{
// //     console.log("ur name is vinod nahadur"); //means hum kya chahte hai event ko fire krne k baad...
// //  })
// //  event.on("sayMyName",()=>{
// //     console.log("ur name is vinod thaoa"); //means hum kya chahte hai event ko fire krne k baad...
// //  })
 


// //  event.emit("sayMyName");//now we have emmitted and now want to listen this event

//  //registering for the events with the callback parameters...means hm apne event me callback parameter 
//  //bhi pass kr skte hai..

//  event.on("checkpage",(sc,msg)=>{
//     console.log(sc,msg)
//  })

//  //let say we have created one other event
//  event.emit("checkPage",200,"ok");

const EventEmitter = require('events');

// create EventEmitter object
const eventEmitter = new EventEmitter();

// add callback function to be executed on event trigger
eventEmitter.on('connect', (database) => {
    console.log(`Connected to ${database}.`);
});

// example data
const databaseName = 'myDatabase';

// trigger the event with passed argument
eventEmitter.emit('connect', databaseName);
