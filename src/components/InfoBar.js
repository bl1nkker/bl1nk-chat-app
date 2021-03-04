import React from 'react'
import './../css/infobar.css'

function InfoBar({ room }) {
    return (
        <div className='infoBar'>
            <div className='leftInnerContainer'>
                <img className='onlineIcon' alt='online image' src={'https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/onlineIcon.png'}/>
                <h3>Room: {room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a href='/'> <img src={'https://raw.githubusercontent.com/adrianhajdin/project_chat_application/master/client/src/icons/closeIcon.png'} alt='close image'/> </a>
            </div>
        </div>
    )
}

export default InfoBar
