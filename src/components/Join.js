import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './../css/join.css'

function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className='joinOuterContainer'>
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <div><input value={ name } placeholder='Type your Nickname...' className='joinInput' type='text' onChange={ (event) => setName(event.target.value) }/></div>
                <div><input value={ room } placeholder='Type the Room...' className='joinInput' type='text' onChange={ (event) => setRoom(event.target.value) }/></div>
                {/* We use "?" in our URL to specify some params */}
                <Link onClick={ (event) => (!name || !room) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type='submit'>Submit</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
