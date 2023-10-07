import { PencilSquareIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
const products = [
    {
        id: 1,
        tel: "(+66)000000",
        name: 'Johnny eiei',
        href: '#',
        address: 'White Gold',
        price: '฿8769.99',
        quantity: 1,
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    }]
function myaddress() {
    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <h1 className="sm:text-xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
                My Address</h1>
            {/* ข้อมูล product */}
            <div className="w-full max-w-md lg:pr-4 bg-white   sm:p-1 pr-4 mx-auto my-auto ">
                <div className="flow-root ">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="mb-3 mt-5">
                            <div className="flex items-center space-x-4 mb-3 my-2">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {products[0].name} <span className="font-normal text-sm text-gray-500  dark:text-gray-400">| {products[0].tel}</span>
                                    </p>
                                    <p className="text-sm text-gray-500 truncate ">
                                        Kasiensin Place, m.12, Sila, Mueang, Khon Kaen
                                    </p>
                                    <p className="text-sm text-gray-500 truncate mt-2 border border-gray-500 w-16 text-center">
                                        Default
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <PencilSquareIcon className="h-6 w-6 text-gray-500 hover:scale-105" />
                                </div>
                            </div>
                        </li>
                        <li className="mb-3 mt-5">
                            <div className="flex items-center space-x-4 mb-3 my-2">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {products[0].name} <span className="font-normal text-sm text-gray-500  dark:text-gray-400">| {products[0].tel}</span>
                                    </p>
                                    <p className="text-sm text-gray-500 truncate ">
                                        Kasiensin Place, m.12, Sila, Mueang, Khon Kaen
                                    </p>
                                    
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    <PencilSquareIcon className="h-6 w-6 text-gray-500 hover:scale-105" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='text-center flex justify-center  group hover:text-gray-900 hover:scale-100'>
                    <PlusCircleIcon className="h-5 w-5 text-gray-500 group-hover:text-gray-900"/>
                    <p className='text-sm text-gray-500 truncate pl-2 group-hover:text-gray-900'>Create New Address</p>
                </div>
            </div>
        </div>
    )
}

export default myaddress