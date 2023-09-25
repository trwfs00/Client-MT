import React from 'react'
import MyBest from '@/images/best.svg'
import En from '@/images/En.svg'
import Women from '@/images/Women.svg'
import Ear from '@/images/Earrings.svg'
import Neck from '@/images/Necklaces.svg'
import casual from '@/images/CasualRings.svg'
import Image from 'next/image';

function Categories() {
    return (
            <div className="container mx-auto max-w-7xl my-6">
                <h1 className='text-3xl md:text-4xl my-12 font-semibold text-gray-900 font-mtserif text-center'>Categories</h1>
                <div className='flex flex-nowrap gap-10 carousel carousel-center p-2 py-6 hover:overflow-x-scroll overflow-x-hidden text-center cursor-pointer font-mtserif'>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4">
                        <a href=""><Image className="h-[8em] w-auto" src={MyBest} alt="Logo" /></a>
                        <p className="text-md md:text-lg my-4 font-medium">Best Sellers</p>
                    </div>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4">
                        <a href=""><Image className="h-[8em] w-auto" src={En} alt="Logo" /></a>
                        <p className="text-md md:text-lg my-4 font-medium">Engagement Rings</p>
                    </div>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4 ">
                        <a href=""><Image className="h-[8em] w-auto" src={Neck} alt="Logo" /></a>
                        <p className="text-md md:text-lg my-4 font-medium">Casual Rings</p>
                    </div>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4 ">
                        <a href=""><Image className="h-[8em] w-auto" src={casual} alt="Logo" /></a>
                        <p className="text-md md:text-lg my-4 font-medium">Necklaces</p>
                    </div>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4 ">
                        <a href=""><Image className="h-[8em] w-auto" src={Ear} alt="Logo" /></a>
                        <p className="text-md md:text-lg my-4 font-medium">Earrings</p>
                    </div>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4">
                        <a href=""><Image className="h-[8em] w-auto" src={Women} alt="Logo" /></a>
                        <p className="text-md md:text-lg my-4 font-medium">Women</p>
                    </div>
                </div>
            </div>
    )
}

export default Categories