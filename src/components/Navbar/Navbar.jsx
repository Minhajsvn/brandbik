import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center text-[#3d146d] py-2 px-4 lg:py-9 lg:px-8 md:px-4 md:py-5'>
            <NavLeft />
            <NavRight />
        </nav>
    )
}
