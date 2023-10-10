const  eventEmitter =require("events")
const Emitter=new eventEmitter()

Emitter.on("log",(message)=>{
    console.log(message)
})

Emitter.emit('log','massage')