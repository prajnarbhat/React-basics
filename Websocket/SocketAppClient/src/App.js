import { useEffect } from "react"
import { io } from "socket.io-client"

// Init the connection
const socket = io("http://localhost:3001")

const App = () => {

    useEffect(() => {

        // recieving message from server
        socket.on('connect',() => {
            socket.on('welcome', (data) => {
                console.log("Message from server",data)
            })

            // sending message to server
            socket.emit('msg', 'Thanks for connecting')
        });

        return () => {
            socket.off("connect")
        }
    },[])

    return (
        <>
            <h3> Understanding Web socket </h3>
        </>
    )
}

export default App;