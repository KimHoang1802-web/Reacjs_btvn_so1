import React from 'react'

const Detail = (props) => {
    const {detailProduct} = props
    return (
        <div className='container flex'>
        <div className='image w-1/3'>
            <img src={detailProduct.hinhAnh} alt="" />
        </div>
        <div className='content w-2/3'>
            <h3 className='text-2xl font-bold mt-5'>Thông số kỹ thuật</h3>
            {/* Table */}
            <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <tbody>
                <tr className="bg-white border-b ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Màn hình
                    </th>
                    <td className="px-6 py-4">
                    {detailProduct.manHinh}
                    </td>
                </tr>
                <tr className="bg-white border-b ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Hệ điều hành
                    </th>
                    <td className="px-6 py-4">
                    {detailProduct.heDieuHanh}
                    </td>
                </tr>
                <tr className="bg-white ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Cammera Trước
                    </th>
                    <td className="px-6 py-4">
                    {detailProduct.cameraTruoc}
                    </td>
                </tr>
                <tr className="bg-white ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Cammera Sau
                    </th>
                    <td className="px-6 py-4">
                    {detailProduct.cameraSau}
                    </td>
                </tr>
                <tr className="bg-white ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Ram
                    </th>
                    <td className="px-6 py-4">
                    {detailProduct.ram}
                    </td>
                </tr>
                <tr className="bg-white ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Rom
                    </th>
                    <td className="px-6 py-4">
                    {detailProduct.rom}
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
    )
}

export default Detail