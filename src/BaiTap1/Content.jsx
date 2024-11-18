import React from 'react'

const Content = () => {
    return (
        <div className='container'>
            <div className='bg-slate-100 border w-40 h-60 text-center hover:shadow-md hover:shadow-blue-500'>
            <div className='bg-slate-300 border w-40 h-28'></div>
            <h2 className='font-semibold text-xl'>Card title</h2>
            <p className='text-wrap font-thin mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='bg-slate-300 border w-40 h-12 text-center hover:shadow-md'>
                <button className='bg-blue-700 text-white mt-2 p-1 rounded-md hover:bg-blue-950'>
                    <span>Find Out More!</span>
                </button>
            </div>
        </div>
        
    )
}

export default Content