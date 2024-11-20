import React from 'react'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'

export default function HeroBottom() {
    return (
        <div className='flex justify-center items-center flex-col md:flex-row space-x-2'>
            <div>
                Webflow Website
            </div>
            <div className='space-y-2 space-x-3 md:space-x-3'>
                <div className='inline-block w-12 h-12 lg:w-20 lg:h-20'>
                    <img src={profile1} alt="profile photo 1"  className='object-cover w-full h-full rounded-full' />
                </div>
                <div className='inline-block  w-12 h-12 lg:w-20 lg:h-20'>
                    <img src={profile2} alt="profile photo 2"  className='object-cover w-full h-full rounded-full' />
                </div>
                <div className='inline-block  w-12 h-12 lg:w-20 lg:h-20'>
                    <img src={profile3} alt="profile photo 3" className='object-cover w-full h-full rounded-full' />
                </div>  
            </div>
        </div>
    )
}
