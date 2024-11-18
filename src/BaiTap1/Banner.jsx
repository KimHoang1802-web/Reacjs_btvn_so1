import React from 'react'

const Banner = () => {
    return (
    <div className='container my-5 mx-auto'>
        <div className='bg-gray-400'>
            <h1 className='text-4xl font-thin mt-8 '>A Warm Welcome</h1>
            <p className='font-thin mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corrupti blanditiis quas ullam porro odio vitae. Facilis eveniet rerum officiis dolorem ipsam, amet voluptates, libero repellat quisquam necessitatibus tempora modi?</p>
            <button className='mt-2 bg-blue-800 text-white p-2 rounded-md font-thin mb-5'>
                <span>Call to action!</span>
            </button>
        </div>
    </div>
    )
}

export default Banner