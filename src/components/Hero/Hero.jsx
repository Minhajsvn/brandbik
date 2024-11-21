import React from 'react'
import HeroTop from './HeroTop'
import HeroMiddle from './HeroMiddle'
import HeroBottom from './HeroBottom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return (
        <div className='flex flex-col justify-center items-center text-[#3d146d]'>
            <div className='text-2xl md:text-4xl lg:text-5xl font-semibold space-y-3 lg:w-10/12 py-6 lg:py-14 px-2 lg:px-8'>
                <HeroTop />
                <HeroMiddle />
                <HeroBottom />
            </div>
            <p className='text-md md:text-xl'>See why Thema is the best pick for your site!</p>
            <div className='space-x-5 space-y-6'>
                <button className='bg-[#3d146d] text-white text-base md:text-lg rounded-full h-12 w-36 md:w-40 space-x-2'><span>Explore now</span> <FontAwesomeIcon icon={faArrowDown} /></button>
                <button className='bg-[#f5c748] text-[#3d146d] text-base md:text-lg rounded-full h-12 w-36 md:w-40 space-x-2'><span>Buy template</span> <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    )
}
