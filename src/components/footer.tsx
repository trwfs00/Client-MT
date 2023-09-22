import React, { Component } from 'react'
import Link from 'next/link';
import MyLogo from '../images/logo.svg'
import Image from 'next/image';
import {
    ArrowPathIcon,
    Bars3BottomLeftIcon,
    Bars3Icon,
    CalendarDaysIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    HeartIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    SquaresPlusIcon,
    XMarkIcon,

} from '@heroicons/react/24/outline'
export class footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer p-20  text-base-content ">
                    <aside className=''>
                        <div className="flex lg:flex-1 mr-12">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Mentor Diamond</span>
                                <Image className="h-[4.5rem] w-auto" src={MyLogo} alt="Logo" />
                            </Link>
                        </div>
                        <div className='mt-5'>
                            <p className='text-base'>238/8 Soi Thepharak, Tambon Nai Mueang, <br />
                                Amphoe Mueang, Khon Kaen, Thailand. 40000
                            </p>
                            <p className='mt-5 text-base'>service@mentordiamond.com</p>
                            <p className='mt-5 text-base'>+66 95 669 6499</p>
                        </div>


                    </aside>
                    <nav>
                        <header className="font-semibold text-lg uppercase text-black">Help & Information</header>
                        <a className="link link-hover text-base">Contact Us</a>
                        <a className="link link-hover text-base">FAQs</a>
                        <a className="link link-hover text-base">Order Tracking</a>
                        <a className="link link-hover text-base">Shipping & Returns</a>
                        <a className="link link-hover text-base">Product Assurance</a>
                        <a className="link link-hover text-base">Jewelry Care & Repair</a>
                        <a className="link link-hover text-base">Book an Appointment</a>

                    </nav>
                    <nav>
                        <header className="font-semibold text-lg uppercase text-black">Categories</header>
                        <a className="link link-hover text-base">Earrings</a>
                        <a className="link link-hover text-base">Necklaces</a>
                        <a className="link link-hover text-base">Best Sellers</a>
                        <a className="link link-hover text-base">Engagement Ring</a>
                        <a className="link link-hover text-base">Casual Ring</a>
                        <a className="link link-hover text-base">Women</a>
                        <a className="link link-hover text-base">Men</a>
                    </nav>
                    <form>
                        <header className="font-semibold text-lg uppercase text-black">Join Our Exclusive Offers</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-base">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="E-maill address" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-dark absolute top-0 right-0 rounded-l-none"> 
                                </button>
                            </div>

                        </fieldset>
                        <nav className="md:place-self-center md:justify-self-start">
                            <div className="grid grid-flow-col gap-4 mt-3">
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                <p className='text-base'>Diamond Mania</p>
                                <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                </a>
                            </div>
                        </nav>
                    </form>


                </footer>
                <div>
                    <footer className="footer px-10 py-4 border-t bg-base-100 text-base-content border-base-300">
                        <aside className="items-center grid-flow-col  md:justify-self-start pl-10">

                            <p className='pr-10' >Privacy Policy</p>
                            <p className='pr-10' >Terms & Conditions</p>
                            <p className='pr-10'>Do Not Sell My Personal Infomation</p>
                            <p className='pr-10'>Manage Cookie Preferences</p>


                        </aside>

                        <aside className="items-center grid-flow-col md:justify-self-end">
                            <div className=''>© Mentor Diamond. 2024</div>
                        </aside>

                    </footer>
                </div>
            </div>




        )
    }
}

export default footer