import React from 'react'
import heroLine from '../../assets/hero-line.svg'
import rainbow from '../../assets/rainbow.svg'

export default function HeroMiddle() {
    return (
        <div className='flex justify-center items-center space-x-2 lg:space-x-5'>
            <div className='hidden md:inline-block md:w-20 lg:w-28'>
                <img src={rainbow} alt="rainbow image" />
            </div>
            <div className='relative'>
            <div className='absolute w-16 top-6 left-10 md:w-28 md:left-14 md:top-7 lg:w-36 lg:top-9 lg:left-20 -z-10'>
                <img src={heroLine} alt="hero line" />
            </div>
            <div className='absolute w-24 top-6 right-1 md:w-36 md:top-7 lg:w-48 lg:top-9 lg:right-2 -z-10'>
                <img src={heroLine} alt="hero line" />
            </div>
                an <span className='text-[#692eaa]'>Vibrant</span> and <span className='text-[#692eaa]'>Engaging</span>
            </div>
        </div>
    )
}
