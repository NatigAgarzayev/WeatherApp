import React, { useEffect, useRef } from 'react'
import './Modal.css'

import Location from "../images/location.svg"
import Back from "../images/back.svg"

function Modal(props) {

    let fadeOutAnim = useRef()

    useEffect(() => {
        fadeOutAnim.current.classList.add('fadeIn')
    }, [])

    function closeModal() {
        fadeOutAnim.current.classList.remove('fadeIn')
        fadeOutAnim.current.classList.add('fadeOut')
        setTimeout(() => {
            props.setVisible(false);
        }, 450)
    }

    let ImageURL = `http://openweathermap.org/img/wn/${props.data[0]?.imageURL}@2x.png`;
    return (
        <section ref={fadeOutAnim} onClick={closeModal} className='overlay'>
            <div className='block'>
                <img onClick={closeModal} src={Back} alt="" />
                <h1>Weather App</h1>
                <div className='Location'>
                    <img width='30' height='30' src={Location} alt="Location" />
                    <span>{props.data[0]?.name}</span>
                </div>
                <div className='WeatherIcon'>
                    <img src={ImageURL} alt="weather icon" />
                </div>
                <div className='Description'>{props.data[0]?.description}</div>
                <div className='Temprature'>{props.data[0]?.temprature} C</div>
                <div className='Other'>
                    <div className="OtherItem">
                        <div>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 0.5C17.5203 0.5 15.5 2.52031 15.5 5C15.5 7.47969 17.5203 9.5 20 9.5C22.4797 9.5 24.5 7.47969 24.5 5C24.5 2.52031 22.4797 0.5 20 0.5ZM20 6.5C19.1703 6.5 18.5 5.82969 18.5 5C18.5 4.17031 19.1703 3.5 20 3.5C20.8297 3.5 21.5 4.17031 21.5 5C21.5 5.82969 20.8297 6.5 20 6.5ZM12.5 5.75C12.5 2.84844 10.1516 0.5 7.25 0.5C4.34844 0.5 2 2.84844 2 5.75V13.5547C1.07656 14.7125 0.5 16.1562 0.5 17.75C0.5 21.4766 3.52344 24.5 7.25 24.5C10.9766 24.5 14 21.4766 14 17.75C14 16.1562 13.4234 14.7078 12.5 13.5547V5.75ZM7.25 21.5C5.18281 21.5 3.5 19.8172 3.5 17.75C3.5 16.5547 4.07188 15.4578 5 14.7594V5.75C5 4.50781 6.00781 3.5 7.25 3.5C8.49219 3.5 9.5 4.50781 9.5 5.75V14.7594C10.4281 15.4531 11 16.5547 11 17.75C11 19.8172 9.31719 21.5 7.25 21.5ZM8 15.6359V14.75C8 14.3375 7.6625 14 7.25 14C6.8375 14 6.5 14.3375 6.5 14.75V15.6359C5.62813 15.9453 5 16.7703 5 17.75C5 18.9922 6.00781 20 7.25 20C8.49219 20 9.5 18.9922 9.5 17.75C9.5 16.7703 8.87187 15.9453 8 15.6359Z" fill="#EAEAEA" />
                            </svg>
                        </div>
                        <div>
                            <h6>{props.data[0]?.feelsLike} C</h6>
                            <p>Feels like</p>
                        </div>
                    </div>
                    <div className="OtherItem">
                        <div>
                            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 19C6.28333 19 4.396 18.2293 2.838 16.688C1.27933 15.146 0.5 13.2833 0.5 11.1C0.5 10 0.704333 8.979 1.113 8.037C1.521 7.09567 2.1 6.26667 2.85 5.55L8.5 0L14.15 5.55C14.9 6.26667 15.4793 7.09567 15.888 8.037C16.296 8.979 16.5 10 16.5 11.1C16.5 13.2833 15.721 15.146 14.163 16.688C12.6043 18.2293 10.7167 19 8.5 19ZM2.525 10.5H14.475C14.4083 9.81667 14.2293 9.18333 13.938 8.6C13.646 8.01667 13.25 7.48333 12.75 7L8.5 2.8L4.25 7C3.75 7.48333 3.354 8.01667 3.062 8.6C2.77067 9.18333 2.59167 9.81667 2.525 10.5Z" fill="#EAEAEA" />
                            </svg>
                        </div>
                        <div>
                            <h6>{props.data[0]?.humidity}%</h6>
                            <p>Humidity</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Modal