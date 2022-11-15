import React from 'react'
import './Enlightenment.css'

const Enlightenment = () => {
    return (
        <div className='app__enlightenment'>
            <h1 className='header-text'>Enlightenment</h1>
            <div className='enlightenment__cards'>
                <div className='card__box'>
                    <h3>3 card oracle</h3>
                    <p>$11.11</p>
                    <h6>Description</h6>
                    <p> 
                        A three card oracle reading is a wonderful way to look into a specific situation or to 
                        find an in-depth answer and understanding of a challenging question.
                    </p>
                    <button className='app__button'>Add to bag</button>
                </div>
                <div className='card__box'>
                    <h3>Career path</h3>
                    <p>$55.00</p>
                    <h6>Description</h6>
                    <p>
                        Clarification and insight if you are feeling indecisive regarding your career path. 
                        If you are at a crossroads, feeling blocked or facing an obstacle, 
                        we can consult the cards as a tool in the means of getting a different perspective, 
                        or coming together of a possible solution.
                        A different way of implementing your energy into generating a new action towards the life that you do want.
                        Once you have booked the reading, I will contact you to confirm your appointment, 
                        as well as go over your questions and what you are looking to gain from this reading. 
                        Final reading will be sent back to you in a private link via e-mail within 24 hours of booking. 
                        You will be able to download a copy of the video in HD. Live readings available upon request.
                    </p>
                    <button className='app__button'>Add to bag</button>
                </div>
                <div className='card__box'>
                    <h3>Love Reading</h3>
                    <p>$33.00</p>
                    <h6>Description</h6>
                    <p>
                        We will explore the energy within your current connection to grasp a better understanding of how you and your partner are truly feeling, 
                        if there are any obstacles or blockages that may be preventing your relationship from flourishing, 
                        and where the current energy is propelling you towards into the future. 
                        We can also discuss what changes need to be made in the current energy of the connection to gain a more positive outcome.
                        If you are not in a current connection, 
                        we can explore the energy surrounding your love life and what you can anticipate in the days ahead. 
                        If there are any blockages that may be preventing you from flourishing, 
                        we can compassionately examine and identify any patterns that have caused this friction. 
                        Releasing the energies that no longer serve your highest good in order to allow the energy of love to find you in harmony.
                        Once you've booked the reading, I will contact you to confirm your appointment, 
                        as well as go over your questions and what you are looking to gain from this reading. 
                        Final reading will be sent back to you via e-mail within 24 hours of booking. 
                        Live readings available per request.
                    </p>
                    <button className='app__button'>Add to bag</button>
                </div>
            </div>
        </div>
    )
}

export default Enlightenment