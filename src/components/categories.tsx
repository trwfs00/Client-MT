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
        <>
            <div className="container mx-auto">
                <div className='text-center text-4xl font-semibold text-gray-900 dark:text-white" ' >
                    {/* <h1>Categories</h1> */}
                    <div className='overflow-x-auto'>
                        <div className='flex flex-wrap'>
                        <div className=" mt-10 w-24 h-24 sm:w-48 sm:h-30 md:w-64 md:h-64 lg:w-40 lg:h-50  rounded-full mx-auto mb-4 ">
                            <a href=""><Image className="h-30 w-auto" src={MyBest} alt="Logo" /></a>
                            <p className="text-lg font-semibold">Best Sellers</p>
                        </div>
                            <div className=" mt-10 w-24 h-24 sm:w-48 sm:h-30 md:w-64 md:h-64 lg:w-40 lg:h-50  rounded-full mx-auto mb-4">
                            <a href=""><Image className="h-30 w-auto" src={En} alt="Logo" /></a>
                            <p className="text-lg font-semibold">Engagement Rings</p>
                        </div>
                            <div className="mt-10 w-24 h-24 sm:w-48 sm:h-30 md:w-64 md:h-64 lg:w-40 lg:h-50  rounded-full mx-auto mb-4 ">
                            <a href=""><Image className="h-30 w-auto" src={Neck} alt="Logo" /></a>
                            <p className="text-lg font-semibold">Casual Rings</p>
                        </div>
                            <div className="mt-10 w-24 h-24 sm:w-48 sm:h-30 md:w-64 md:h-64 lg:w-40 lg:h-50  rounded-full mx-auto mb-4 ">
                            <a href=""><Image className="h-30 w-auto" src={casual} alt="Logo" /></a>
                            <p className="text-lg font-semibold">Necklaces</p>
                        </div>
                            <div className="mt-10 w-24 h-24 sm:w-48 sm:h-30 md:w-64 md:h-64 lg:w-40 lg:h-50  rounded-full mx-auto mb-4 ">
                            <a href=""><Image className="h-30 w-auto" src={Ear} alt="Logo" /></a>
                            <p className="text-lg font-semibold">Earrings</p>
                        </div>
                            <div className="mt-10 w-24 h-24 sm:w-48 sm:h-30 md:w-64 md:h-64 lg:w-40 lg:h-50  rounded-full mx-auto mb-4">
                            <a href=""><Image className="h-30 w-auto" src={Women} alt="Logo" /></a>
                            <p className="text-lg font-semibold">Women</p>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Categories