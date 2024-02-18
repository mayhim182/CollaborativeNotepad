const io = require('socket.io')();
const express = require('express');
const cors = require('cors');
const app = express();


const corsOptions = {
    origin: 'http://localhost:3000', // Change this to your actual client domain
    methods: ['GET', 'POST'], // Include appropriate methods used by Socket.IO
    credentials: true, // Allow credentials if needed
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use('/socket.io', cors(corsOptions));
  
io.use(cors(corsOptions));

io.on('connection',(client)=>{
    //here can start emitting events to the client
    client.on('subscribeToTimer',(interval)=>{
        console.log('client is subscribing to timer with interval',interval);
        setInterval(()=>{
            client.emit('timer',new Date());
        }, interval);
    });
})

const port = 8000;
io.listen(port);

console.log('server.js - listening on port: ', port);