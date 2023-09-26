import Image from "next/image";
import slide1 from '@/images/facebook-591.jpg'
import slide2 from '@/images/facebook-796.jpg'
import slide3 from '@/images/facebook-670.jpg'
import slide4 from '@/images/facebook-754.jpg'
import slide5 from '@/images/facebook-796.jpg'
import slide6 from '@/images/facebook-797.jpg'
import slide7 from '@/images/facebook-831.jpg'
import slide8 from '@/images/facebook-879.jpg'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";


export default function carousel() {
    return (
        <div className="box-content md:flex md:flex-row md:flex-wrap overflow-hidden justify-between max-h-[calc(100vh-6em)]">
        <div className="absolute -translate-y-1/2 lg:translate-y-0 left-5 right-5 top-[82%] lg:static md:flex-1 z-10">
            <div className="flex flex-col justify-center items-center relative h-full w-2/3 lg:w-3/4 mx-auto">
                <h1 className="font-mtserif font-semibold text-4xl text-center lg:text-left lg:text-5xl xl:text-7xl mb-6 text-gray-900">
                    Jewelry that Speaks Volumes
                </h1>
                <p className="font-mtsans font-light text-center lg:text-left text-md lg:text-xl xl:text-2xl text-gray-700">
                    Let Your Accessories Echo Your Style, Adorn Yourself in Timeless Elegance
                </p>
            </div>
        </div>
        <div className="md:flex-1">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-screen max-h-[calc(100vh-6em)]" data-carousel-item>
                    <Image src={slide1}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        alt="test"/>
                    <div className="absolute flex justify-center gap-4 lg:justify-end transform xl:-translate-y-1/2 left-5 right-5 top-[86%] lg:left-10 lg:right-10 lg:top-[86%]">
                        <a href="#slide4" className="btn text-white rounded-3xl px-6 bg-gray-600 bg-opacity-10 border hover:bg-white hover:text-gray-500 hover:scale-105 transition-all duration-200">
                            <ArrowLongLeftIcon className="h-6 w-6" />
                        </a>
                        <a href="#slide2" className="btn text-white rounded-3xl px-6 bg-gray-600 bg-opacity-10 border hover:bg-white hover:text-gray-500  hover:scale-105 transition-all duration-200">
                            <ArrowLongRightIcon className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-screen max-h-[calc(100vh-6em)]">
                    <Image src={slide2} 
                        className="w-full h-auto object-cover" 
                        loading="lazy"
                        alt="test" />
                    <div className="absolute flex justify-center gap-4 lg:justify-end transform xl:-translate-y-1/2 left-5 right-5 top-[86%] lg:left-10 lg:right-10  lg:top-[86%]">
                        <a href="#slide1" className="btn text-white rounded-3xl px-6 bg-gray-600 bg-opacity-10 border hover:bg-white hover:text-gray-500 hover:scale-105 transition-all duration-200">
                            <ArrowLongLeftIcon className="h-6 w-6" />
                        </a>
                        <a href="#slide3" className="btn text-white rounded-3xl px-6 bg-gray-600 bg-opacity-10 border hover:bg-white hover:text-gray-500  hover:scale-105 transition-all duration-200">
                            <ArrowLongRightIcon className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-screen max-h-[calc(100vh-6em)]">
                    <Image src={slide3} 
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        alt="test"/>
                   <div className="absolute flex justify-center gap-4 lg:justify-end transform xl:-translate-y-1/2 left-5 right-5 top-[86%] lg:left-10 lg:right-10  lg:top-[86%]">
                        <a href="#slide2" className="btn text-white rounded-3xl px-6 bg-gray-600 bg-opacity-10 border hover:bg-white hover:text-gray-500 hover:scale-105 transition-all duration-200">
                            <ArrowLongLeftIcon className="h-6 w-6" />
                        </a>
                        <a href="#slide4" className="btn text-white rounded-3xl px-6 bg-gray-600 bg-opacity-10 border hover:bg-white hover:text-gray-500  hover:scale-105 transition-all duration-200">
                            <ArrowLongRightIcon className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-screen max-h-[calc(100vh-6em)]">
                    <Image src={slide4} 
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        alt="test"/>
                    <div className="absolute flex justify-center gap-4 lg:justify-end transform xl:-translate-y-1/2 left-5 right-5 top-[86%] lg:left-10 lg:right-10  lg:top-[86%]">
                        <a href="#slide3" className="btn text-white rounded-3xl px-6 bg-gray-600 bg-opacity-10 border hover:bg-white hover:text-gray-500 hover:scale-105 transition-all duration-200">
                            <ArrowLongLeftIcon className="h-6 w-6" />
                        </a>
                        <a href="#slide1" className="btn text-white rounded-3xl px-6 bg-gray-600 bg-opacity-10 border hover:bg-white hover:text-gray-500  hover:scale-105 transition-all duration-200">
                            <ArrowLongRightIcon className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
