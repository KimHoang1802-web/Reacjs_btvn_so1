import React from 'react'

const ShopCard = (props) => {
    return (
    <div className='container text-center'>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
            <img className="rounded-t-lg" src={props.detail.image} alt />
        </a>
        <div className="p-5">
            <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{props.detail.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.detail.price}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        </div>
    </div>
)
}

export default ShopCard