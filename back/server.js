const http = require('http').createServer();
const io = require('socket.io')(http, {
    cors: { origin: "*" }
});




let rooms={}

io.on('connection', (socket) => {
    //console.log('a user connected id:  ',socket.id);
    

    //creating a game
    socket.on("create game",(gameInfo)=>{
        let {room,client,gameSettings}=gameInfo
        if (!(room in rooms)) {
            rooms[room] = {players:[client],gameSettings:gameSettings};
            socket.join(room);
        }

        console.log(rooms)
          
    })

    //joining a game

    socket.on("join game",(gameInfo)=>{
        let {room,client}=gameInfo
        if (room in rooms) {
            if (rooms[room]["players"].length < 2 && client!==rooms[room]["players"][0]){
                rooms[room]["players"].push(client);
                socket.join(room);
                //io.to(room).emit('start game',{start:true,opponent:client});

                socket.emit("start game",{start:true,opponent:rooms[room]["players"][0],gameSettings:rooms[room]["gameSettings"]})
                socket.to(room).emit("start game",{start:true,opponent:client})

                console.log(rooms)
                
                //send back opponent info if user name exists send user name already exists add html warnings
                //username already taken event 
                //use socketbrodcat and socketemit to send opponents name
            }

            else if (rooms[room]["players"].length < 2 && client===rooms[room]["players"][0]){
                socket.emit("room exception",{exception:"user name already used"})
            }



            else{
                socket.emit("room exception",{exception:"room is full"})
                console.log("room is full")
                //send back to client room is full
            }
        }

        



        else{
            socket.emit("room exception",{exception:"no such room exists"})
            console.log("room not found")

        }
            
            //else send back to client room does not exist 

        
    })


    // Handle incoming chat messages
    socket.on('new message', (msg,room) => {
        console.log('Message:', msg);
        // Broadcast the message to all connected clients
        socket.to(room).emit('new message', msg);
        //socket.to(roomId).emit('new-message', msg)
    });

    socket.on("move made",(move,room)=>{
        socket.to(room).emit('move made',move);
    })

    socket.on('in game option',(option,room)=>{
        socket.to(room).emit('in game option',option)
    })



    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('A user has disconnected.');
        //git
        //send a message user has left the game
        //when user disconnects remove client from room

    });

    
});

http.listen(8080, () => console.log('listening on http://localhost:8080') );