const os = require("os");
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(`total Memory ${totalMemory} free Memory ${freeMemory}`);