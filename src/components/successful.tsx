import { CheckBadgeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
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
function successful() {
    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <div className="py-8">
                <div className="container mx-auto px-4  ">
                    <div className="flex flex-col rounded-2xl border border-[#95E7BB] w-2/4 m-auto bg-[#95E7BB] text-center h-40 ">
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
                </div>
            </div>
        </div>
        
        


    )
}

export default successful