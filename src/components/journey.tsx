import React from 'react'
import Image from 'next/image';
import Myjour from '@/images/journey.svg';
function journey() {
    return (
        <div className="bg-white py-24 sm:py-32 -z-10">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* <div className="hero w-screen h-screen ">
                <Image className="object-cover object-center  " src={Myjour} alt="" />
                <div className=" "></div>
                <div className="  ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Your Journey, <br />Our Passion</h1>
                        <p className="mb-5"> Made with Love From Earth's Heart to Your Heart In Each Sparkling Gem, a Tale of Love and Legacy Unfolds to Your Heart.</p>
                        <div className="flex  mx-auto">
                            <button className="bg-transparent  text-black font-semibold  py-2 px-4 border border-current rounded-full">
                                Our Story
                            </button>
                            <button
                                className="ml-4 bg-transparent  text-black font-semibold  py-2 px-4 border border-current rounded-full">
                                Find Our Store
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="w-screen h-screen text-back" >
                
                <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center  " src={Myjour} alt="" />
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                   
                    <div className=" lg:w-5/12 w-full">
                        <h1 className="my-4 text-5xl font-bold leading-tight">
                            Your Journey, <br />Our Passion
                        </h1>
                        <p className="text-2xl mb-8">
                            Made with Love From Earth's Heart to Your Heart In Each Sparkling Gem, a Tale of Love and Legacy Unfolds to Your Heart
                        </p>
                        <div className="flex justify-center mx-auto">
    
                            <button className="bg-transparent  text-black font-semibold  py-2 px-4 border border-current rounded-full">
                                Our Story
                            </button>
                            <button
                                className="ml-4 bg-transparent  text-black font-semibold  py-2 px-4 border border-current rounded-full">
                                Find Our Store
                            </button>
                        </div>
                    </div>
                </div>
            </div > */}
        </div>
    )
}

export default journey