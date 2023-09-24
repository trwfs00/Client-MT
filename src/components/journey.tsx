import React from 'react'
import Image from 'next/image';
import Myjour from '@/images/journey.svg';
function journey() {
    return (
        <div className="mx-auto font-mtsans">
            <div className="hero h-96 md:h-[35em]" style={{
                backgroundImage: `url(${Myjour.src})`,
            }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="translate-x-[4em] sm:translate-x-8 lg:translate-x-0 hero-content max-w-xs md:max-w-full justify-end text-center md:text-left text-neutral-content w-full">
                    <div className="max-w-md lg:max-w-lg">
                        <h1 className="mb-6 text-3xl md:text-5xl font-semibold text-gray-900 font-mtserif">Your Journey,<br/> Our Passion</h1>
                        <p className="mb-10 text-xs md:text-md md:text-lg text-gray-700">Made with Love From Earth's Heart to Your Heart In Each Sparkling Gem, a Tale of Love and Legacy Unfolds to Your Heart</p>
                        <div className="flex text-sm md:text-xl font-mtserif mx-auto justify-center md:justify-start">
                            <button className="bg-transparent  text-black font-normal py-2 px-4 border transition duration-100 hover:scale-110 border-current rounded-full">
                                Our Story
                            </button>
                            <button
                                className="ml-4 bg-transparent  text-black font-normal py-2 px-4 border transition duration-100 hover:scale-110 border-current rounded-full">
                                Find Our Store
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-nowrap gap-4 carousel carousel-center text-md bg-white overflow-x-hidden hover:overflow-x-scroll sm:hover:overflow-x-hidden">
                <div className="min-w-[26em] ml-5 p-6 md:p-8 border-x bg-gradient-to-b from-[ #0F172A] to-[#BCBCBC]">
                    <span className='text-lg font-semibold'>Free Shipping with Zero Worries</span>
                    <p className='pt-5 text-sm'>We offer free shipping on all orders within Thailand. Returns are accepted on all unworn items within 30 days of purchase.</p>
                                </div>
                <div className="min-w-[30em] ml-5 p-6 md:p-8 border- bg-gradient-to-b from-[ #0F172A] to-[#BCBCBC]">
                    <span className='text-lg font-semibold'>Flexible on Self-Pickup</span>
                    <p className='pt-5 text-sm'>Choose "Self-Pickup" at checkout and make the appointment when you'd like to pick up your order.</p></div>
                <div className="min-w-[30em] ml-5 mr-5 p-6 md:p-8 border-x bg-gradient-to-b from-[ #0F172A] to-[#BCBCBC]">
                    <span className='text-lg font-semibold'>Book an Appointment</span>
                    <p className='pt-5 text-sm'>Schedule Your exclusive appointment today to experience the Brilliance of Diamonds, Guided by our expert advisors.</p>
                </div>
            </div>
        </div>
    )
}

export default journey