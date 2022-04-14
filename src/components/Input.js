import React from 'react'
import './../css/input.css'

function Input({ message, setMessage, sendMessage }) {
    return (
        <form className='form'>
            <input 
            className='input'
            type='text'
            placeholder='Type a message...'
            value={message}
            onChange={ (event) => setMessage(event.target.value) }
            // Вот эту строку надо тож анкомментнуть
            // onKeyPress={ (event) => event.key === 'Enter' && sendMessage(event) }
            />
            {/* FIXME:Уберите коммент отсюда чтоб баг с отправкой сообщении исправить и удалите 16 строку */}
            {/* <button className='sendButton' onClick={ (event) => sendMessage(event)}>Send</button> */}
            <button className='sendButton'>Send</button>
        </form>
    )
}

export default Input
