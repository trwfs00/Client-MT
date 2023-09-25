import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const products = [
    {
        id: 1,
        size: "52",
        name: 'Belgium cut color 99-98 vvs level',
        href: '#',
        color: 'White Gold',
        price: '฿8769.99',
        quantity: 1,
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },]

function purchases() {
    const [open, setOpen] = useState(true)
    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl  items-center  mx-auto p-4 ">
                    <ul className="justify-center flex flex-row font-medium p-4 mt-4  rounded-lg  md:flex-row md:space-x-8 bg-white ">
                        <li>
                            <a href="#" className="py-2 pl-3 pr-4 text-gray-900   md:hover:bg-transparent   dark:text-white  " aria-current="page">To Pay</a>
                        </li>
                        <li>
                            <a href="#" className="py-2 pl-3 pr-4 text-gray-900   md:hover:bg-transparent   dark:text-white  border-b border-gray-500 font-bold">To Ship</a>
                        </li>
                        <li>
                            <a href="#" className="py-2 pl-3 pr-4 text-gray-900   md:hover:bg-transparent   dark:text-white  ">To Receive</a>
                        </li>
                        <li>
                            <a href="#" className="py-2 pl-3 pr-4 text-gray-900   md:hover:bg-transparent   dark:text-white  ">Complete</a>
                        </li>
                    </ul>

                </div>
            </nav>

            {/* ข้อมูล product */}
            <div className="w-full max-w-md lg:pr-4 bg-white   sm:p-1 pr-4 mx-auto my-auto ">
                <div className="flow-root ">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-20 h-auto "
                                        src={products[0].imageSrc}
                                        alt="Neil image"></img>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {products[0].name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        Size : {products[0].size} <br />
                                        Color : {products[0].color} <br />
                                        x1
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {products[0].price}
                                </div>
                            </div>
                        </li>
                        <li className="">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-20 h-auto "
                                        src={products[0].imageSrc}
                                        alt="Neil image"></img>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {products[0].name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        Size : {products[0].size} <br />
                                        Color : {products[0].color} <br />
                                        x1
                                    </p>
                                </div>
                                <div className="inline-flex justify-items-end text-base font-semibold text-gray-900 dark:text-white ">
                                    {products[0].price}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="...">Totals :</div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white justify-end ml-auto"> {products[0].price}</div>
                        <div className="font-medium ">Ship By:</div>
                        <div className="text-sm truncate dark:text-gray-400 justify-end ml-auto">Wednesday, August 23</div>
                    </div>



                </div>
            </div>

        </div>

    )
}

export default purchases