const express = require('express')
const app = express()
const path = require('path');
const server = require('http').createServer(app); 
const io = require('socket.io')(server);
const settings = require('./server/settings')
const movement = require('./server/movement') 

io.on('connection', (socket)=>{
  socket.on('movement',(payload)=>{
    movement.catchMove(payload)
  })
})


app.use(express.json())
app.use(express.static(path.join(__dirname, '/build/')));

app.post('/api/settings/normalLights', (req,res)=>{
  res.send(settings.switchNormalLights())
})

app.post('/api/settings/longLights', (req,res)=>{
  res.send(settings.switchLongLights())
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

server.listen(3100, console.log('Runing on port 3100'))