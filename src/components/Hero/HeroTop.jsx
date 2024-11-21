import React from 'react'
import heroLine from '../../assets/hero-line.svg'


export default function HeroTop() {
    return (
        <div className='flex justify-center items-center space-x-5'>
            <div>
                Education Template for 
            </div>
            <div className='inline-block w-16 md:w-32 lg:w-52'>
                <img src={heroLine} alt="hero line" />
            </div>
        </div>
    )
}
