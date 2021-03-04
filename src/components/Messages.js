import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'
import './../css/messages.css'

function Messages({ messages, name }) {
    return (
        <ScrollToBottom className='messages'> 
            { messages.map( (message, id) => (
                <div key={id}>
                    <Message message={message} name={name}/>
                </div>
            ) ) }
        </ScrollToBottom>
    )
}

export default Messages
