import Link from 'next/link';
import Image from 'next/image';
import { button, input } from '@material-tailwind/react';
import React from 'react'
import En from "@/images/En.svg"
import Ring from "@/images/ring.svg"
import {  ShoppingBagIcon, ShoppingCartIcon,  UsersIcon } from '@heroicons/react/24/outline';
export default function addproduct() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
                {/* Page content here */}
                <h1 className='text-xl font-bold mt-10 ml-10'>Add Product</h1>
                <div className='contrainer mx-10 my-2'>

                    <div className="grid grid-cols-2 gap-4 bg-white sm:rounded-lg mt-5 shadow">

                        <div className=' my-5'>
                            <div className='flex justify-center items-center mt-5'>
                                <Image className="h-auto w-auto" src={Ring} alt="Logo" />
                            </div>
                            <div className='flex justify-center items-center my-5'>
                            <div className="form-control w-full max-w-xs ">
                                <label className="label">
                                        <span className="label-text font-medium">Pick a file</span>
                                    
                                </label>
                                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                           
                        </div>


                        <div className='my-10 p-5'>

                            <div className="form-control w-full max-w-xs  ">
                                <label className="label">
                                    <span className="label-text font-medium">Type</span>

                                </label>
                                <select className="select select-bordered border-gray-700">
                                    <option disabled selected>Rings</option>
                                    <option>Earrings</option>
                                    <option>Bracelets</option>
                                    <option>Necklaces</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text  font-medium">Product Name</span>

                                </label>
                                <input type="text" placeholder="Product Name" className="input border-gray-700  w-full max-w-xs " />
                            </div>
                           
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">Product DESC</span>

                                </label>
                                <input type="text" placeholder="Product DESC" className="input border-gray-700  w-full max-w-xs " />
                            </div>
                           
                        </div>
                        <div className='col-span-2 flex justify-center items-center  mb-5 '>
                            <button className="btn btn-neutral text-white">Add product</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                        <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <ShoppingCartIcon className="h-6 w-6 text-gray-500 " />
                            <span className="flex-1 ml-3 text-left whitespace-nowrap"> Product</span>
                        </button>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                            <UsersIcon className="h-6 w-6 text-gray-500" />
                            <span className="flex-1 ml-3 whitespace-nowrap">User</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                            <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
                            <span className="flex-1 ml-3 whitespace-nowrap">purchase order</span>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}
