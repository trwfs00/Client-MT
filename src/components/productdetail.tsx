import React from 'react'
import Image from 'next/image';
import En from "@/images/En.svg"
import { InformationCircleIcon, MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';


function productdetail() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
                {/* Page content here */}
                <h1 className='text-xl font-bold mt-10 ml-10'>Product List</h1>
                <div className='contrainer mx-10 my-2'>
                    <div className='flex justify-end'>
                        <button type="button" className=" bg-slate-700 text-white mr-10 w-25 h-10 px-4   hover:bg-slate-500 font-medium rounded-lg text-sm  text-center inline-flex items-center   ">
                        <PlusCircleIcon className="h-6 w-6 mr-2 text-white" />
                        Add SKUs
                    </button></div>
                    <div className="grid grid-cols-3 gap-4">

                        <div className="border mt-5 bg-white shadow-md sm:rounded-lg ">
                            <div className='mt-5'>
                                <p className='text-center text-md font-medium'>Product Name</p>
                            </div>
                            <div className="flex justify-center items-center h-48 my-5">
                            <Image className="h-30 w-auto " src={En} alt="Logo" />
                            </div>
                            
                            <div className='flex justify-center items-center'>
                                <p className='mt-2 border sm:rounded-lg p-1 bg-slate-400'>Product Type</p>
                            </div>
                            <div className='mt-5 p-3 text-white sm:rounded-lg bg-slate-700 '>
                                <p>Product Details</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nulla sunt officiis temporibus inventore, cupiditate, magni recusandae quod earum eum distinctio alias hic facere praesentium, illum deserunt. Error, vero adipisci!</p>
                            </div>
                            

                        </div>
                        <div className="col-span-2 ">

                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 my-5">


                                <table className="table table-xs bg-white ">
                                    <thead>
                                        <tr className='text-center bg-slate-700 '>
                                            <th className='p-3 text-white'>SKUs Code</th>
                                            <th className='text-white'>Color</th>
                                            <th className='text-white'>GoldWight</th>
                                            <th className='text-white'>Price</th>
                                            <th className='text-white'>SKUs Image</th>
                                            <th colSpan={2} className='text-white'>Manage</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr >
                                            <td className="p-3">Cy Ganderton</td>
                                            <td >Quality Control Specialist</td>
                                            <td>Littel, Schaden and Vandervort</td>
                                            <td>
                                                <div className="lg:tooltip" data-tip="จะหมัดจะมวย">
                                                    <span>29999</span>
                                                </div>
                                            </td>
                                            <td>
                                                <Image className="h-20 w-auto" src={En} alt="Logo" />
                                            </td>
                                            <td className="">
                                                <button type="button" className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm p-2  text-center inline-flex items-center  ">
                                                    <TrashIcon className="h-4 w-4 text-white" />
                                                </button>
                                                <div id="tooltip-dark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                                                    Tooltip content
                                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                                </div>
                                            </td>
                                            <td className="">
                                                <button type="button" className=" bg-yellow-400 hover:bg-yellow-600 ml-2.5 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                                    <PencilSquareIcon className="h-4 w-4 text-white " />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">Hart Hagerty</td>
                                            <td>Desktop Support Technician</td>
                                            <td>Zemlak, Daniel and Leannon</td>
                                            <td>
                                                <div className="lg:tooltip" data-tip="hello">
                                                    <span>29999</span>
                                                </div>
                                            </td>
                                            <td>
                                                <Image className="h-20 w-auto" src={En} alt="Logo" />
                                            </td>
                                            <td className="">
                                                <button type="button" className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm p-2  text-center inline-flex items-center  ">
                                                    <TrashIcon className="h-4 w-4 text-white" />
                                                </button>
                                            </td>
                                            <td className="">
                                                <button type="button" className=" bg-yellow-400 hover:bg-yellow-600 ml-2.5 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                                    <PencilSquareIcon className="h-4 w-4 text-white " />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">Brice Swyre</td>
                                            <td>Tax Accountant</td>
                                            <td>Carroll Group</td>
                                            <td>
                                                <div className="lg:tooltip" data-tip="hello">
                                                    <span>29999</span>
                                                </div>
                                            </td>
                                            <td>
                                                <Image className="h-20 w-auto" src={En} alt="Logo" />
                                            </td>
                                            <td className="">
                                                <button type="button" className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm p-2  text-center inline-flex items-center  ">
                                                    <TrashIcon className="h-4 w-4 text-white" />
                                                </button>
                                            </td>
                                            <td className="">
                                                <button type="button" className=" bg-yellow-400 hover:bg-yellow-600 ml-2.5 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                                    <PencilSquareIcon className="h-4 w-4 text-white " />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">Brice Swyre</td>
                                            <td>Tax Accountant</td>
                                            <td>Carroll Group</td>
                                            <td>
                                                <div className="lg:tooltip" data-tip="hello">
                                               <span>29999</span> 
                                                </div>
                                            </td>
                                            <td>
                                                <Image className="h-20 w-auto" src={En} alt="Logo" />
                                            </td>
                                            <td className="">
                                                <button type="button" className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm p-2  text-center inline-flex items-center  ">
                                                    <TrashIcon className="h-4 w-4 text-white" />
                                                </button>
                                            </td>
                                            <td className="">
                                                <button type="button" className=" bg-yellow-400 hover:bg-yellow-600 ml-2.5 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                                    <PencilSquareIcon className="h-4 w-4 text-white " />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>                             
                            </div>
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

export default productdetail