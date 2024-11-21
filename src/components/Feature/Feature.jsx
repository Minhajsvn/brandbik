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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center text-[#3d146d] py-4 px-16">
            {statistics.map((item, index) => {
                return (
                    <div key={index} className='w-[90vw] sm:w-auto md:w-full h-36 flex flex-col justify-center items-center bg-gray-50 drop-shadow-lg rounded-2xl'>
                        <h1 className='text-5xl font-semibold mb-2'>{item.count}</h1>
                        <p className='text-lg font-medium text-center px-6 md:w-50 leading-tight'>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
