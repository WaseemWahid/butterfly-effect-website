import React from 'react'
import { images } from '../../constants'
import './About.css'

const About = () => {
    return (
        <div className='app__about'>
            <div className='app__about-container'>
                <div className='app__about-text'>
                    <h1 className='app__about-header'>More About me:</h1>
                    <p className='p-text'>I am a Generational Healer, certified Spirituality Coach, certified Reiki Master, Lightworker as well as a certified Life Coach. 
                        I channel energy through spirit, love and light.
                        I will provide you with clarification and insight if you are at a crossroads and feeling indecisive, blocked or facing an obstacle. 
                        We can consult the cards as a tool in the means of getting a different perspective or coming together of a possible solution. 
                        A different way of implementing your energy into generating a new action towards the life that you do want. 
                        Aura cleansing offered if you need assistance in breaking free of any energy that may no longer serve your highest good.
                    </p>
                </div>
                <div className='app__about-image'>
                    <img src={images.aboutImage} alt='about'/>
                </div>
            </div>
        </div>
    )
}

export default About