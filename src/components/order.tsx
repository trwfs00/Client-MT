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
                    <div className='border bg-white w-full max-w-xl p-8 rounded-xl relative'>
                        <h1 className='text-xl font-bold'>Order</h1>
                        <div className='flex flex-col max-w-full justify-between my-5 p-4 bg-white border border-gray-100 shadow-sm rounded-xl'>
                            <div className='flex-1'>
                                <h1>Order ID #0012030</h1>
                                <h1>บลาๆๆๆๆๆ</h1>
                                <div className='flex flex-row w-full justify-between items-center'>
                                    <h1>บลาๆๆๆๆๆ</h1>
                                    <button
                                        onClick={() => { setIsOpen(!isOpen) }}
                                        className='bg-[#0F172A]  text-white px-6 h-10 w-auto rounded-full focus:ring-4 focus:outline-none focus:ring-gray-100'>
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isOpen ? (
                        <div className='border bg-white flex-auto flex flex-col justify-between p-5 rounded-xl'>
                            <>
                                <h1 className='text-xl font-bold text-center'>Order Detail</h1>
                                <div className=''>
                                    <p className='mt-5 ml-5'>Order no.</p>

                                    <div className='grid grid-cols-3 gap-4 '>
                                        <Image className="m-5 rounded-xl" src={Ring} alt="Logo" />
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
                                <div className='grid grid-cols-3 gap-4  border-gray-300 '>
                                    <Image className="m-5 rounded-xl " width={150} height={100} src={Ring} alt="Logo" />
                                    <div className="flex items-center col-span-2 ml-10">
                                        <div className="form-control">
                                            <label className="label cursor-pointer">

                                                <input type="radio" name="radio-10" className="radio checked:bg-red-500" />
                                                <span className="label-text pl-3">not pay</span>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer">

                                                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
                                                <span className="label-text pl-3">pay complete</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </>
                            <div className=''>
                                <button type="button" className="text-white bg-[#0F172A] w-full hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                    Confirm
                                </button>

                            </div>


                        </div>
                    ) : (
                        <div className='  flex-auto rounded-xl '>
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
