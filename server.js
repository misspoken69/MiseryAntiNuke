const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('Misery Anti-Nuke Stats: \nOnline')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is ready!")
  });
}
