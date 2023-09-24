import React from 'react'
import Image from 'next/image';
import Myjour from '@/images/journey.svg';
function journey() {
    return (
        <div className="mx-auto">
            <div className="hero h-96 md:h-[40em] lg:h-[50em]" style={{
                backgroundImage: `url(${Myjour.src})`,
            }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content justify-end text-center md:text-left text-neutral-content w-full">
                    <div className="max-w-md lg:max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold text-gray-900 w-[8em]">Your Journey, Our Passion</h1>
                        <p className="mb-5 text-lg text-gray-700">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="flex  mx-auto">
                            <button className="bg-transparent  text-black font-semibold  py-2 px-4 border hover:bg-base-200 border-current rounded-full">
                                Our Story
                            </button>
                            <button
                                className="ml-4 bg-transparent  text-black font-semibold  py-2 px-4 border hover:bg-base-200 border-current rounded-full">
                                Find Our Store
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4  text-md bg-white">
                <div className="ml-5 p-6 md:p-8 border-x bg-gradient-to-b from-[ #0F172A] to-[#BCBCBC]">

                    <span className='text-xl font-bold'>Free Shipping with Zero Worries</span>
                    <p className='pt-5 text-md '>We offer free shipping on all orders within Thailand. <br /> Returns are accepted on all unworn items within 30 days of purchase.</p>
                
                </div>
                <div className="ml-5 p-6 md:p-8 border- bg-gradient-to-b from-[ #0F172A] to-[#BCBCBC]"><span className='text-xl font-bold'>Flexible on Self-Pickup</span>
                    <p className='pt-5 text-md'>Choose "Self-Pickup" at checkout and make the appointment <br /> when you'd like to pick up your order.</p></div>
                <div className="ml-5 mr-5 p-6 md:p-8 border-x bg-gradient-to-b from-[ #0F172A] to-[#BCBCBC]"><span className='text-xl font-bold'>Book an Appointment</span>
                    <p className='pt-5 text-md'>Schedule Your exclusive appointment today to experience <br /> the Brilliance of Diamonds, Guided by our expert advisors.</p>

                </div>

            </div>
        </div>
    )
}

export default journey