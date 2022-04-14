import React from 'react'
import './../css/message.css'

function Message({ message: { user, text }, name }) {
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName){
        isSentByCurrentUser = true
    }
    return (
        isSentByCurrentUser ?
        <div className='messageContainer justifyEnd'>
            <p className='sentText pr-10'>{trimmedName}</p>
            <div className='messageBox backgroundBlue'>
                {/* FIXME: Уберите коммент отсюда чтоб баг с отправкой сообщении исправить и удалите 19 строку */}
                {/* <p className='messageText colorWhite'>{text}</p> */}
                <p className='messageText colorWhite'>Это не то сообщение которое ты хотел бы видеть.</p>
            </div>
        </div>
        :
        <div className='messageContainer justifyStart'>
            <div className='messageBox backgroundLight'>
                <p className='messageText colorDark'>{text}</p>
            </div>
            { /* FIXME: Уберите коммент отсюда чтоб баг с отправкой сообщении исправить и удалите 29 строку */}
            { /* <p className='sentText pl-10'>{user}</p> */}
            <p className='sentText pl-10'>some_user</p>
        </div>
    )
}

export default Message
