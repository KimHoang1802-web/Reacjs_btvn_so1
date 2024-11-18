import React from 'react'
const Header = () => {
return (
    <div className='container bg-blue-950 text-white'>
        <div className='flex justify-around mt-10'>
            <h1>Start Bootstrap</h1>
            <div>
                <ul className='flex justify-between items-center'>
                    <li className='mr-10 '>Home</li>
                    <li className='mr-10 text-gray-500'>About</li>
                    <li className='mr-10 text-gray-500'>Service</li>
                    <li className='mr-10 text-gray-500'>Contact</li>
                </ul>
            </div>
            
        </div>
    </div>
    )
}

export default Header