import React from 'react'
import { images } from '../../constants'
import './Header.css'

const Header = () => {
    return (
        <div className='app__header'>
            <div className='app__header-container'>
                <img src={images.flyingButterfly} alt='flying buterfly'/>
                <h1>Butterfly Effect</h1>
                <h3>A location for all your healing needs</h3>
            </div>
        </div>
    )
}

export default Header