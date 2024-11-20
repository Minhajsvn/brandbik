import React from 'react'
import heroLine from '../../assets/hero-line.svg'
import rainbow from '../../assets/rainbow.svg'

export default function HeroMiddle() {
    return (
        <div className='flex justify-center items-center space-x-2 lg:space-x-5'>
            <div className='hidden md:inline-block md:w-20 lg:w-40'>
                <img src={rainbow} alt="rainbow image" />
            </div>
            <div className='relative'>
            <div className='absolute w-24 top-6 left-11 md:w-28 md:left-14 md:top-7 lg:w-56 lg:top-14 lg:left-28 -z-10'>
                <img src={heroLine} alt="hero line" />
            </div>
            <div className='absolute w-32 top-6 right-0 md:w-36 md:top-7 lg:w-72 lg:top-14 lg:right-4 -z-10'>
                <img src={heroLine} alt="hero line" />
            </div>
                an <span className='text-[#692eaa]'>Vibrant</span> and <span className='text-[#692eaa]'>Engaging</span>
            </div>
        </div>
    )
}
