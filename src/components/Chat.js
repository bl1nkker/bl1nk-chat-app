import React, { useState, useEffect } from 'react'

// This helping us retrieving some data form the URL
import queryString from 'query-string'
import io from 'socket.io-client'

import InfoBar from './InfoBar'
import Input from './Input'
import Messages from './Messages'

import './../css/chat.css'


let socket;

// That fixed the error with CORS
var connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", 
    "timeout" : 10000,                  
    "transports" : ["websocket"]
};

// location prop comes from 'react-router-dom'
function Chat({ location }) {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')

    // Here we specified our back-end location
    const ENDPOINT = 'http://localhost:8080/'

    // This function responses for user connection to the server
    useEffect( () => {
        // Here we retrieve some data about authorized user (name/room)
        const data = queryString.parse(location.search)

        // That fixed the error with CORS
        // Connect user to socket
        socket = io.connect(ENDPOINT,connectionOptions);
        
        setName(data.name)
        setRoom(data.room)

        // When we first going to chat, we dispatch an event calld 'join' and pass some params. This action will dispatch at the backend server
         socket.emit('join', { name:data.name , room:data.room }, () => {})

        // This is used for Unmounting or Disconnect effect
        return () => {
            // Emit the action called 'disconnect'
            socket.emit('disconnect')
            // Turn off the instance of the client socket
            socket.off()
        }
    }, [ENDPOINT, location.search])

    // For handling messages
    useEffect( () => {
        // Listen for the messages
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (event) =>{
        event.preventDefault()
        if (message){
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }
    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={room}/>  
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>  
            </div>
        </div>
    )
}

export default Chat
