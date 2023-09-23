import React, { Component } from 'react'
import Link from 'next/link';
import MyLogo from '../images/logo.svg'
import Image from 'next/image';
import {
    ArrowRightIcon, BarsArrowUpIcon, ChevronRightIcon
} from '@heroicons/react/24/outline'
export class footer extends Component {
    render() {
        return (
            <>
                <footer className="footer bg-white p-20  text-base-content">
                    <aside className=''>
                        <div className="flex lg:flex-1 mr-12">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Mentor Diamond</span>
                                <Image className="h-[4.5rem] w-auto" src={MyLogo} alt="Logo" />
                            </Link>
                        </div>
                        <div className='mt-5'>
                            <p className='text-bmd'>238/8 Soi Thepharak, Tambon Nai Mueang, <br />
                                Amphoe Mueang, Khon Kaen, Thailand. 40000
                            </p>
                            <p className='mt-5 text-md'>service@mentordiamond.com</p>
                            <p className='mt-5 text-md'>+66 95 669 6499</p>
                        </div>


                    </aside>
                    <nav>
                        <header className="font-semibold text-lg uppercase text-black">Help & Information</header>
                        <a className="link link-hover text-md">Contact Us</a>
                        <a className="link link-hover text-md">FAQs</a>
                        <a className="link link-hover text-md">Order Tracking</a>
                        <a className="link link-hover text-md">Shipping & Returns</a>
                        <a className="link link-hover text-md">Product Assurance</a>
                        <a className="link link-hover text-md">Jewelry Care & Repair</a>
                        <a className="link link-hover text-md">Book an Appointment</a>

                    </nav>
                    <nav>
                        <header className="font-semibold text-lg uppercase text-black">Categories</header>
                        <a className="link link-hover text-md">Earrings</a>
                        <a className="link link-hover text-md">Necklaces</a>
                        <a className="link link-hover text-md">Best Sellers</a>
                        <a className="link link-hover text-md">Engagement Ring</a>
                        <a className="link link-hover text-md">Casual Ring</a>
                        <a className="link link-hover text-md">Women</a>
                        <a className="link link-hover text-md">Men</a>
                    </nav>
                    <form>
                        <header className="font-semibold text-lg uppercase text-black">Join Our Exclusive Offers</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-md">Want exclusive offers and first access to the products? Sign up for the latest alert</span>
                            </label>
                            <div className="relative mt-5">
                                <input type="text" placeholder="E-maill address" className="input bg-gray-50 input-bordered rounded-none w-full pr-16" />
                                <button className="btn  bg-gray-800 absolute top-0 right-0 rounded-none"> 
                                    <ChevronRightIcon className="h-5 w-5 text-[#ffffff] translate-y-[0.15em]" />
                                </button>
                                
                            </div>

                        </fieldset>
                    </form>


                </footer>
                <>
                    <footer className="footer bg-gray-100 px-10 py-4 border-t text-base-content border-gray-200">
                        <aside className="items-center grid-flow-col  md:justify-self-start pl-10">

                            <p className='pr-10 text-md text-slate-400' >Privacy Policy</p>
                            <p className='pr-10 text-md text-slate-400' >Terms & Conditions</p>
                            <p className='pr-10 text-md text-slate-400'>Do Not Sell My Personal Infomation</p>
                            <p className='pr-10 text-md text-slate-400'>Manage Cookie Preferences</p>


                        </aside>

                        <aside className="items-center grid-flow-col md:justify-self-end">
                            <div className='text-md text-slate-400'>© Mentor Diamond. 2024</div>
                        </aside>

                    </footer>
                </>
            </>
        )
    }
}

export default footer