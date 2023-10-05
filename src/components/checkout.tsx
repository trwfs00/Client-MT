import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
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
    }]
function checkout() {
    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <div className=" py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-2/4 ">
                            <div className="bg-white rounded-lg shadow-md p-6 divide-y divide-gray-200">
                                {/* <h2 className="text-lg font-semibold mb-4">Address</h2> */}
                                <button className='w-full mb-3'>
                                    <div className="flex mt-3">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        </span>
                                        <span>
                                            <h2 className="text-sm font-semibold mb-1 pl-2">Address</h2>
                                        </span>
                                    </div>
                                    <div className="flex justify-between  ml-8 mb " >
                                        <div>
                                            <p className="text-sm text-gray-500 truncate text-left">
                                                Johnny eiei, 000-000000
                                            </p>
                                            <p className="text-sm text-gray-500 truncate ">
                                                Kasiensin Place, m.12, Sila, Mueang, Khon Kaen, 40000
                                            </p>
                                        </div>
                                        <div>
                                            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                        </div>
                                    </div>
                                </button>
                                <button className='w-full '>
                                    <div className="flex  mt-3">
                                        <span>
                                            <h2 className="text-sm font-semibold mb-1 ">Delivery Option</h2>
                                        </span>
                                    </div>
                                    <div className="flex justify-between mb-3  ml-8">
                                        <div>
                                            <p className="text-sm text-gray-500 truncate text-left">
                                                Standard Delivery
                                            </p>
                                            <p className="text-xs text-gray-500 truncate ">
                                                Ship By:Monday,August 23
                                            </p>
                                        </div>
                                        <div>
                                            <div className="inline-flex items-center text-sm  text-gray-500 dark:text-white">
                                                ฿120.00
                                                <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                            </div>
                                        </div>
                                    </div></button>
                                <button className='w-full '>
                                    <div className="flex justify-between mt-3 mb-3">
                                        <span>
                                            <h2 className="text-sm font-semibold mb-1 ">Notes:</h2>
                                        </span>
                                        <p className="text-xs text-gray-500 truncate ">
                                            Leave a message to the seller.
                                        </p>
                                    </div></button>
                                <button className='w-full '>
                                    <div className="flex  justify-between mt-3 mb-3">
                                        <div className="flex mb-0 ">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                                                </svg>
                                            </span>
                                            <span>
                                                <h2 className="text-sm font-semibold mb-1 pl-2">Coupon & Voucher</h2>
                                            </span>
                                        </div>
                                        <div className="inline-flex items-center text-xs  text-gray-500 dark:text-white">
                                            Apply Code
                                            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                        </div>
                                    </div></button>
                                <button className='w-full'>
                                    <div className="flex justify-between mt-3 mb-3">
                                        <div className="flex mb-0 ">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>

                                            </span>
                                            <span>
                                                <h2 className="text-sm font-semibold mb-1 pl-2">Pay methods</h2>
                                            </span>
                                        </div>
                                        <div className="inline-flex items-center text-xs  text-gray-500 dark:text-white">
                                            QR Promptpay
                                            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                        </div>
                                    </div></button>

                            </div>
                        </div>

                        {/*  */}
                        <div className="md:w-2/4 h-full">
                            <div className="bg-white rounded-lg shadow-md p-6  h-full">
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
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {products[0].price}
                                                </div>
                                            </div>
                                        </li>


                                    </ul>
                                    <div className="flex justify-between mt-3 text-sm text-gray-500 ">
                                        <span>Order Totals</span>
                                        <span>฿0.00</span>
                                    </div>
                                    <div className="flex justify-between  mt-1 text-sm text-gray-500" >
                                        <span>Delivery fees</span>
                                        <span>฿120.00</span>
                                    </div>
                                    <div className="my-2">
                                        <div className="flex justify-between  mt-1 text-[#1F304A]">
                                            <span className="font-semibold">Total</span>
                                            <span className="font-semibold">฿0.00</span>
                                        </div>
                                    </div>
                                    <button type="button" className="w-full px-5 py-2.5 text-sm font-medium text-white bg-[#0F172A] hover:bg-gray-800 focus:outline-none  rounded-lg text-center mt-4">Purchases</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default checkout