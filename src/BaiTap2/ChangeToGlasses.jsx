import React, { useState } from 'react'

const ChangeToGlasses = () => {
    const [image, setImage] = useState("./image/model.jpg");

    const changeColor = (img) => {
        let image = `./image/${img}.jpg`;
        setImage(image);
    }
    return (
        <div className='container'>
            <div className='flex items-center justify-around'>
                <div className='w-80 h-80'>
                    <img src={image} alt="" />
                    <div className='bg-orange-300'>
                        <h2 className='text-xl text-purple-700 font-extrabold'>
                            FENDI F8750
                        </h2>
                        <p className='text-wrap font-thin text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi qui neque et minus libero exercitationem voluptates rerum culpa. Molestias, hic!</p>
                    </div>
                </div>
                <div className='w-80 h-80'> 
                    <img src={image} alt="" />
                </div>
            </div>
            <div className='mt-36 flex justify-between text-wrap'>
                <div>
                    <button onClick={() => {
                    changeColor("g1")
                }}>
                        <img src="./image/g1.jpg" className='h-40 w-40' alt="" />
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                    changeColor("g2")
                }}>
                        <img src="./image/g2.jpg" className='h-40 w-40' alt="" />
                    </button>
                </div>
                <div>
                    <button onClick={() =>{
                        changeColor("g3")
                    }}>
                        <img src="./image/g3.jpg" className='h-20 w-36 mt-14' alt="" />
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        changeColor("g4")
                    }}>
                        <img src="./image/g4.jpg" className='h-20 w-36 mt-14' alt="" />
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        changeColor("g5")
                    }}>
                        <img src="./image/g5.jpg" className='h-20 w-36 mt-14' alt="" />
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        changeColor("g6")
                    }}>
                        <img src="./image/g6.jpg" className='h-20 w-36 mt-14' alt="" />
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        changeColor("g7")
                    }}>
                        <img src="./image/g7.jpg" className='h-40 w-40' alt="" />
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        changeColor("g8")
                    }}>
                        <img src="./image/g8.jpg" className='h-36 w-36 mt-6' alt="" />
                    </button>
                </div>
            </div>
        </div>
    ) 
}

export default ChangeToGlasses