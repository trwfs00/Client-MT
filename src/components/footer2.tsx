
import React, { Component } from 'react'
import Link from 'next/link';
import MyLogo from '../images/logo.svg'
import Image from 'next/image';
import {
    ArrowRightIcon, BarsArrowUpIcon, ChevronRightIcon
} from '@heroicons/react/24/outline'


export default function footer2() {
    return (
        <footer className="bg-white  fixed bottom-0 w-full">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 ml-5">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Mentor Diamond</span>
                            <Image className="h-[4.5rem] w-auto" src={MyLogo} alt="Logo" />
                        </Link>
                        <p className='text-md text-gray-500'>238/8 Soi Thepharak, Tambon Nai Mueang, <br />
                            Amphoe Mueang, Khon Kaen, Thailand. 40000
                        </p>
                        <p className='mt-5 text-md text-gray-500'>service@mentordiamond.com</p>
                        <p className='mt-5 text-md text-gray-500'>+66 95 669 6499</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 ml-5  mt-5">
                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase ">Help & Information</h2>
                            <ul className="text-gray-500  font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Contact Us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">FAQs</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Shipping & Returns</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Order Tracking</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Product Assurance</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Jewelry Care & Repair</a>
                                </li>

                                <li >
                                    <a href="https://tailwindcss.com/" className="hover:underline">Book an Appointment</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase ">Categories</h2>
                            <ul className="text-gray-500  font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Earrings</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Necklaces</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Best Sellers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Engagement Ring</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Casual Ring</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Women</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Men</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase,">Join Our Exclusive Offers</h2>
                            <ul className="text-gray-500  font-medium">

                                <span >Want exclusive offers and first <br /> access to the products?  Sign up <br /> for the latest alert</span>

                                <div className="relative mt-5">
                                    <input type="text" placeholder="E-maill address" className="input bg-gray-50 input-bordered rounded-none w-full " />
                                    <button className="btn  bg-gray-800 absolute top-0 right-0 rounded-none">
                                        <ChevronRightIcon className="h-5 w-5 text-[#ffffff] translate-y-[0.15em]" />
                                    </button>

                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-3 border-gray-200 sm:mx-auto  " />
                
                <div className='md:flex md:items-center md:justify-between md:p-6 '>
                    <ul className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-500  sm:mt-0 ">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Do Not Sell My Personal Infomation</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Manage Cookie Preferences</a>
                        </li>
                        
                    </ul>
                    
                    <span className="flex md:mt-0 sm:mt-2 w-full sm:w-auto text-sm text-gray-500 sm:text-center justify-center "> @Mentor Diamond. 2024 </span>
                </div>
            </div>
        </footer>

    );
}
