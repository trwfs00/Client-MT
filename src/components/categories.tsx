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
            <div className="container mx-auto max-w-7xl">
                {/* <h1>Categories</h1> */}
                <div className='flex flex-nowrap gap-10 carousel carousel-center p-5 hover:overflow-x-scroll overflow-x-hidden text-center'>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4 ">
                        <a href=""><Image className="h-[8em] w-auto" src={MyBest} alt="Logo" /></a>
                        <p className="text-md my-4 font-semibold">Best Sellers</p>
                    </div>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4">
                        <a href=""><Image className="h-[8em] w-auto" src={En} alt="Logo" /></a>
                        <p className="text-md my-4 font-semibold">Engagement Rings</p>
                    </div>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4 ">
                        <a href=""><Image className="h-[8em] w-auto" src={Neck} alt="Logo" /></a>
                        <p className="text-md my-4 font-semibold">Casual Rings</p>
                    </div>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4 ">
                        <a href=""><Image className="h-[8em] w-auto" src={casual} alt="Logo" /></a>
                        <p className="text-md my-4 font-semibold">Necklaces</p>
                    </div>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4 ">
                        <a href=""><Image className="h-[8em] w-auto" src={Ear} alt="Logo" /></a>
                        <p className="text-md my-4 font-semibold">Earrings</p>
                    </div>
                    <div className="min-w-[6em] max-w-sm rounded-full mx-auto mb-4">
                        <a href=""><Image className="h-[8em] w-auto" src={Women} alt="Logo" /></a>
                        <p className="text-md my-4 font-semibold">Women</p>
                    </div>
                </div>
            </div>
    )
}

export default Categories