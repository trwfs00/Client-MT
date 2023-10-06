import React, { useState } from 'react'
import MyLogo from '@/images/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import MyBest from '@/images/best.svg'
import { InformationCircleIcon, MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
import { input } from '@material-tailwind/react';
import details from "@/images/detail.svg"
import Ring from "@/images/ring.svg"

export default function order() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='font-mtsans font-mtthai'>
            <div className="navbar bg-base-100">
                <div className="flex lg:flex-1 ">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Mentor Diamond</span>
                        <Image className="h-10 w-auto" src={MyLogo} alt="Logo" />
                    </Link>
                </div>
                <div className="flex-none  gap-5">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image className="" src={Ring} alt="Logo" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-row gap-10 p-10">
                    {/* Page content here */}
                    <div className='border bg-white w-full max-w-xl p-8 rounded-xl'>
                        <h1 className='text-xl  font-bold'>Order</h1>
                        <div className='grid grid-cols-4 mt-5 bg-white shadow-lg rounded-xl '>
                            <div><Image className="m-5   rounded-xl" width={100} height={100} src={Ring} alt="Logo" /></div>
                            <div className='p-8'>
                            <p> Customer_id  </p>
                            <p> notes </p>
                            <p> status </p>
                            <p>Total </p></div>
                            <div className=' flex justify-end  col-span-4 mr-5 mb-5'>
                                <button
                                    onClick={() => { setIsOpen(!isOpen) }}
                                    className='bg-gray-700  text-white px-3 py-2 rounded-full'>details</button></div>
                        </div>
                        

                    </div>
                    {isOpen ? (
                        <div className='border bg-white flex-auto p-5 rounded-xl'>
                            <h1 className='text-xl font-bold text-center'>Order Detail</h1>
                                <div className=''>
                                    <p className='mt-5'>Order no.</p>
                                    
                                    <div className='grid grid-cols-3 gap-4 '>
                                        <Image className="m-5 rounded-xl " width={200} height={150} src={Ring} alt="Logo" />
                                        <div className='col-span-2 ml-10'>
                                            <p className='mt-5  font-medium text-sm'> skus_id :<span className='pl-2'>123549849</span> </p>
                                            <p className='text-sm  text-gray-500'>color :<span className='pl-2'>123549849</span></p>
                                            <p className='text-sm text-gray-500 '>Price :<span className='pl-2'>123549849</span></p>
                                            <p className='text-sm text-gray-500' >Glodwight :<span className='pl-2'>123549849</span></p>
                                            <p className=' text-sm text-gray-500'>Size :<span className='pl-2'>123549849</span></p>
                                            <p className='text-sm text-gray-500'>Qty :<span className='pl-2'>123549849</span></p>
                                            <p className='text-sm text-gray-500'>Cost :<span className='pl-2'>123549849</span></p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between border-b border-gray-300 '>
                                        <p className='ml-5 font-medium'>Total</p>
                                        <p className='font-medium'>$2545</p>
                                    </div> </div>
                            <div className='grid grid-cols-3 gap-4 border-b border-gray-300 '>
                                <Image className="m-5 rounded-xl " width={150} height={100} src={Ring} alt="Logo" />
                                <div className="flex items-center col-span-2 ml-10">
                                    <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4  bg-gray-700 border-gray-300 rounded " />
                                    <label htmlFor="checked-checkbox" className="ml-2  text-sm  text-gray-900 ">Checked state</label>
                                </div>
                            </div>

                        </div>
                    ) : (
                            <div className='border  flex-auto rounded-xl '>
                               
                               <div >
                                    <Image className=" w-auto h-auto rounded-xl" src={details} alt="details" />
                               </div>

                            </div>
                    )}
                    
                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <ShoppingCartIcon className="h-6 w-6 text-gray-500 " />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap"> Manage Product</span>
                            </button>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                                <UsersIcon className="h-6 w-6 text-gray-500" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Manage Use</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                                <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Manage purchase order</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}
