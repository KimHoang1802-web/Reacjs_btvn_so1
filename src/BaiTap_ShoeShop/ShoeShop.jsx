import React from 'react'
import ShopCard from './ShopCard'
const data = [
    {
        "id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 995,
        "image": "https://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
        "id": 2,
        "name": "Adidas Prophere Black White",
        "alias": "adidas-prophere-black-white",
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 990,
        "image": "https://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
        "id": 3,
        "name": "Adidas Prophere Customize",
        "alias": "adidas-prophere-customize",
        "price": 375,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 415,
        "image": "https://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
        "id": 4,
        "name": "Adidas Super Star Red",
        "alias": "adidas-super-star-red",
        "price": 465,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 542,
        "image": "https://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
        "id": 5,
        "name": "Adidas Swift Run",
        "alias": "adidas-swift-run",
        "price": 550,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 674,
        "image": "https://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
        "id": 6,
        "name": "Adidas Tenisky Super Star",
        "alias": "adidas-tenisky-super-star",
        "price": 250,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "quantity": 456,
        "image": "https://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
]
const ShoeShop = () => {
    const renderCard = () =>{
        return data.map((item) => {
            return <ShopCard key ={item.id} detail = {item}/>
        })
    }
    return (
    <div className='container'>
        <h2 className='text-4xl font-black text-blue-800 text-center'>Shoe Shop</h2>
        <div className='grid grid-cols-3 gap-5'>
            {renderCard()}
        </div>
    </div>
)
}

export default ShoeShop