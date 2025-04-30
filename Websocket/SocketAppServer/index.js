import { Server } from "socket.io";

// Instentiate server

const io =  new Server(3001);
// We will provide the port where it will run

cors: {
    origin: '*',
}

// Listen to the event and give some values tp client
// Listening to the event using on
io.on('connection', (socket) => {

    // We can emit action as well
    socket.emit('welcome',"Welcome to the channel")

    // We need to emit the the welcome message o client
    socket.on('msg', (data) => {
        console.log("Message from client");
    })

})
