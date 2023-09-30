import React from 'react'
import Image from 'next/image';
import En from "@/images/En.svg"
import { InformationCircleIcon, MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Propss = {
    data: Datas[];
};

type Datas = {
    _id: string,
    Products_idProducts: string,
    color: string,
    goldWight: string,
    price: number,
    cost: number,
    idPictures: {
        path: string;
    }[],
};

function productdetail({ data }: Propss) {
    return (
        <table className="table table-xs bg-white ">
            <thead>
                <tr className='text-center bg-slate-700 '>
                    <th className='p-3 text-white'>SKUs Code</th>
                    <th className='text-white'>Color</th>
                    <th className='text-white'>GoldWight</th>
                    <th className='text-white'>Price</th>
                    <th className='text-white'>SKUs Image</th>
                    <th colSpan={2} className='text-white'>Manage</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='text-center' >
                {data?.length > 0 ? (
                    data.map((skus) => (
                        <tr key={skus._id}>
                            <td className="p-3">{skus._id}</td>
                            <td >{skus.color}</td>
                            <td>{skus.goldWight}</td>
                            <td>
                                <div className="lg:tooltip" data-tip={skus.cost}>
                                    <span>{skus.price}</span>
                                </div>
                            </td>
                            <td className='flex justify-center items-center'>
                                <Image width={80} height={80} src={skus.idPictures[0]?.path} alt="Logo" />
                            </td>
                            <td className="">
                                <button type="button" className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm p-2  text-center inline-flex items-center  ">
                                    <TrashIcon className="h-4 w-4 text-white" />
                                </button>
                                {/* <div id="tooltip-dark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                                    Tooltip content
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div> */}
                            </td>
                            <td className="">
                                <Link href={`../Productdetail/EditSKUs/${skus._id}`}>
                                    <button type="button" className=" bg-yellow-400 hover:bg-yellow-600 ml-2.5 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                        <PencilSquareIcon className="h-4 w-4 text-white " />
                                    </button>
                                </Link>
                                
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={8} className='text-black p-4'>ไม่มีสินค้า</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default productdetail