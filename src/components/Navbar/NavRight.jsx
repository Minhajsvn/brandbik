import { faBagShopping, faEllipsis, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function NavRight() {
    return (
        <ul className='flex items-center justify-between w-3/12 md:w-4/12'>
            <li className='md:text-lg px-3 font-medium  hidden lg:block'>Overview</li>
            <li className='md:text-lg px-3 font-medium  hidden lg:block'>About <div className='w-3 h-3 inline-block bg-[#f5c748] rounded rotate-45 ml-2 mr-1'></div></li>
            <li className='border border-[#8a65b4] rounded-2xl py-3 px-6 hidden md:block'><FontAwesomeIcon icon={faShareNodes} /></li>
            <li className='border border-[#8a65b4] rounded-2xl py-3 px-5 md:px-6'><FontAwesomeIcon icon={faBagShopping} /></li>
            <li className='bg-[#f5c748] border border-[#8a65b4] rounded-2xl py-3 px-3 md:px-6'><FontAwesomeIcon icon={faEllipsis} /></li>
        </ul>
    )
}
