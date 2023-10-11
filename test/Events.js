const  eventemitter =require("events")
const emitter=new eventemitter()

emitter.on("log",(message)=>{
    console.log(message)
})

emitter.emit('log','massage')