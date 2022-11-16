import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src="" alt="navbar-logo" />
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'enlightenment', 'booking', 'testimonials'].map((item) => (
                    <li className='app__flex p-text' key={`link-${ item }`}>
                        <a href={`#${ item }`}>{ item }</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar