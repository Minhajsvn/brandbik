import React from 'react'

export default function Feature() {
    const statistics = [
        {
            count: 3,
            description: 'main layout variations',
        },
        {
            count: 20,
            description: 'prebuilt static pages'
        },
        {
            count: 10,
            description: "ready-made CMS pages"
        },
        {
            count: 50,
            description: 'sections in the UI Kit'
        }
    ]

    return (
        <div className='flex flex-wrap justify-center items-center text-[#3d146d] py-4 h-auto gap-4 md:h-52 md:space-x-4'>
            {statistics.map((item, index) => {
                return (
                    <div key={index} className='w-[90vw] sm:w-1/2 md:w-60 h-36 flex flex-col justify-center items-center bg-gray-50 drop-shadow-lg rounded-2xl'>
                        <h1 className='text-5xl font-semibold mb-2'>{item.count}</h1>
                        <p className='text-lg font-medium text-center px-6 md:px-16 leading-tight'>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
