import { CheckBadgeIcon, ChevronRightIcon, ReceiptPercentIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
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
function successful() {
    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <div className="py-8">
                <div className="container mx-auto px-4  ">
                    <div className="flex flex-col rounded-2xl border border-[#95E7BB] w-full md:max-w-xl m-auto bg-[#95E7BB] text-center h-40 ">
                        <div className='w-full flex flex-row justify-center items-center'>
                            <div className='bg-[#95E7BB] -translate-y-1/2 rounded-full w-14 h-14'>
                                <CheckBadgeIcon className="h-20 w-20 -translate-x-3 -translate-y-3 text-[#95E7BB] stroke-white" />
                            </div>
                        </div>
                        <p className="text-lg font-semibold justify-items-center">
                            Thank you for your order!
                        </p>
                        <p className='text-base pl-5 pr-5'>
                            The order confirmation has been sent to your email address.
                        </p>
                    </div>
                    <div className="w-full max-w-full md:max-w-xl rounded-2xl bg-white mt-2 m-auto">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between  bg-white mb-3 py-2 text-left text-sm font-medium text-gray-900  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75  transition duration-200">
                                        <span>Order Summary</span>

                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-gray-500`}
                                        />
                                    </Disclosure.Button>
                                    <div className="flex items-center space-x-4 pr-1 border-b border-gray-200">
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
                                            </p>
                                        </div>
                                        <div className="text-sm text-gray-500 truncate dark:text-gray-400 mt-9">
                                            x1
                                        </div>
                                    </div>
                                    <Disclosure.Panel className=" pb-2 text-sm text-gray-500">
                                        <div className="md:w-full h-full">
                                            <div className="bg-white   h-full">
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
                                                                    </p>
                                                                </div>
                                                                <div className="text-sm text-gray-500 truncate dark:text-gray-400 mt-9">
                                                                    x1
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
                                                                    </p>

                                                                </div>
                                                                <div className="text-sm text-gray-500 truncate dark:text-gray-400 mt-9">
                                                                    x1
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <div className="flex mt-6">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            </span>
                            <span>
                                <h2 className="text-sm font-semibold mb-1 pl-2 text-gray-900">Address</h2>
                            </span>
                        </div>
                        <div className="flex justify-between  ml-8" >
                            <div>
                                <p className="text-sm text-gray-500 truncate text-left">
                                    Johnny eiei, 000-000000
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                    Kasiensin Place, m.12, Sila, Mueang, Khon Kaen, 40000
                                </p>
                            </div>

                        </div>
                        <div className='flex mt-6'>
                            <span>
                                <ReceiptPercentIcon className="h-5 w-5 text-gray-800" /></span>
                            <span className='ml-2 text-sm font-semibold'>Payment Details</span>
                        </div>
                        <div className="flex justify-between  mt-2 text-sm text-gray-500" >
                            <span>Orders Details</span>
                            <span>฿120.00</span>
                        </div>
                        <div className="flex justify-between   text-sm text-gray-500" >
                            <span>Delivery fees</span>
                            <span>฿120.00</span>
                        </div>
                        <div className="mt-6 mb-3">
                            <div className="flex justify-between  mt-1 text-[#1F304A]">
                                <span className="font-semibold">Totals</span>
                                <span className="font-semibold">฿0.00</span>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <a href='/' type="button" className="w-full px-5 py-2.5 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-300  focus:outline-none  rounded-lg text-center mt-4">Home</a>
                            {/* <button type="button" className="ml-4 w-3/4 px-5 py-2.5 text-sm font-medium text-white bg-[#0F172A] hover:bg-gray-800 focus:outline-none  rounded-lg text-center mt-4">Order Status</button> */}
                        </div></div>
                </div>

            </div>
        </div>


    )
}

export default successful