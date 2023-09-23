
import React, { Component } from 'react'
import Link from 'next/link';
import MyLogo from '../images/logo.svg'
import Image from 'next/image';
import {
    ArrowRightIcon, BarsArrowUpIcon, ChevronRightIcon
} from '@heroicons/react/24/outline'


export default function footer2() {
    return (
        <footer className="bg-white border-t border-gray-100 shadow-sm z-50">
            <div className="mx-auto w-full max-w-screen-xl pt-6 lg:pt-8 px-4">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 ml-5">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Mentor Diamond</span>
                            <Image className="h-10 w-auto" src={MyLogo} alt="Logo" />
                        </Link>
                        <p className='mt-2 text-md text-gray-500'>238/8 Soi Thepharak, Tambon Nai Mueang, <br />
                            Amphoe Mueang, Khon Kaen, Thailand. 40000
                        </p>
                        <p className='mt-5 text-md text-gray-500'>service@mentordiamond.com</p>
                        <p className='mt-5 text-md text-gray-500'>+66 95 669 6499</p>
                    </div>
                    <div className="grid grid-cols-12 gap-8 sm:gap-6 mx-5 lg:mx-20 mt-5">
                        <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase ">Help & Information</h2>
                            <ul className="text-gray-500 font-normal">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Contact Us</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">FAQs</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Shipping & Returns</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Order Tracking</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Product Assurance</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Jewelry Care & Repair</Link>
                                </li>

                                <li >
                                    <Link href="#" className="hover:underline">Book an Appointment</Link>
                                </li>

                            </ul>
                        </div>
                        <div className='col-span-12 sm:col-span-6 lg:col-span-4'>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase ">Categories</h2>
                            <ul className="text-gray-500 font-normal">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Earrings</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Necklaces</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Best Sellers</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Engagement Ring</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Casual Ring</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Women</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Men</Link>
                                </li>

                            </ul>
                        </div>
                        <div className='col-span-12 sm:col-span-12 lg:col-span-4'>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase">Join Our Exclusive Offers</h2>
                            <ul className="text-gray-500 font-normal">
                                <span >Want exclusive offers and first access to the products? Sign up for the latest alert</span>

                                <div className="flex flex-row">
                                    <input type="text" placeholder="E-maill address" className="input bg-gray-50 input-bordered rounded-none my-6 w-full" />
                                    <button className="btn bg-gray-800 rounded-none my-6">
                                        <ChevronRightIcon className="h-5 w-5 text-white translate-y-[0.15em]" />
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="mt-8 mb-3 border-gray-200 sm:mx-auto" />
                
                <div className='md:flex md:items-center md:justify-between md:p-2'>
                    <ul className="flex flex-wrap items-center justify-center gap-2 text-sm font-normal text-gray-500 sm:mt-0 pb-2">
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link href="#" className="mr-4 hover:underline md:mr-6">Do Not Sell My Personal Infomation</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">Manage Cookie Preferences</Link>
                        </li>
                        
                    </ul>
                    
                    <span className="flex md:mt-0 sm:mt-2 w-full sm:w-auto text-sm text-gray-500 sm:text-center justify-center pb-2"> &copy;Mentor Diamond. 2024 </span>
                </div>
            </div>
        </footer>

    );
}
