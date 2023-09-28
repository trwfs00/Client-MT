import React from 'react'
import MyLogo from '@/images/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import MyBest from '@/images/best.svg'
import { InformationCircleIcon, MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
import { input } from '@material-tailwind/react';
import En from "@/images/En.svg"

const navaddmin = () => {
    return (
        <>
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
                                <Image className="h-30 w-auto" src={MyBest} alt="Logo" />
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
                <div className="drawer-content flex flex-col  ">
                    {/* Page content here */}

                    {/* <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                        Toggle modal
                    </button>

                    <div id="popup-modal" tabIndex={-1} class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow ">
                                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center " data-modal-hide="popup-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className="p-6 text-center">
                                    <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <h3 className="mb-5 text-lg font-normal text-gray-500 ">Are you sure you want to delete this product?</h3>
                                    <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                        Yes, I'm sure
                                    </button>
                                    <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">No, cancel</button>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <h1 className='text-xl font-bold mt-10 ml-10'>Product List</h1>
                    <div className='flex justify-between my-5'>
                        <div className=''>
                            <div className=" relative mx-auto text-gray-600">
                                <input className="border-2 ml-10 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Search" />
                                <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>
                        </div>
                        <button type="button" className="  text-white mr-10 w-25 h-10 px-4  bg-slate-700 hover:bg-bg-slate-700 font-medium rounded-lg text-sm  text-center inline-flex items-center   ">
                            <PlusCircleIcon className="h-6 w-6 mr-2 text-white" />
                            Add product
                        </button>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 my-5">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product detail
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created_At
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Manage
                                    </th>
                                    <th scope="col" className="px-6 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className='flex justify-center items-center'>
                                        <Image className="h-20 w-auto" src={En} alt="Logo" />
                                    </td>
                                    <td className="px-6 py-4">
                                        หลังเที่ยง
                                    </td>
                                    <td className="px-6 py-4">
                                        
                                        <button type="button" className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm p-2  text-center inline-flex items-center  ">
                                            <TrashIcon className="h-5 w-5 text-white" />

                                        </button>

                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href="" className="text-md font-normal leading-6 text-gray-900">
                                            <button type="button" className=" bg-yellow-400 hover:bg-yellow-600 ml-2.5 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                                <PencilSquareIcon className="h-5 w-5 text-white " />
                                            </button>
                                        </Link>
                                        
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" className=" bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                            <InformationCircleIcon className="h-5 w-5 text-white" />

                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className='flex justify-center items-center'>
                                        <Image className="h-20 w-auto" src={En} alt="Logo" />
                                    </td>
                                    <td className="px-6 py-4">
                                        หลังเที่ยง
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm p-2  text-center inline-flex items-center  ">
                                            <TrashIcon className="h-5 w-5 text-white" />

                                        </button>

                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" className=" bg-yellow-400 hover:bg-yellow-600 ml-2.5 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                            <PencilSquareIcon className="h-5 w-5 text-white " />

                                        </button>
                                    </td>
                                    <td className="px-6 py-4">

                                        <button type="button" className=" bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                            <InformationCircleIcon className="h-5 w-5 text-white" />

                                        </button>
                                    </td>
                                </tr>
                                <tr className="bg-white ">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className='flex justify-center items-center'>
                                        <Image className="h-20 w-auto" src={En} alt="Logo" />
                                    </td>
                                    <td className="px-6 py-4">
                                        หลังเที่ยง
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm p-2  text-center inline-flex items-center  ">
                                            <TrashIcon className="h-5 w-5 text-white" />

                                        </button>

                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" className=" bg-yellow-400 hover:bg-yellow-500 ml-2.5 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                            <PencilSquareIcon className="h-5 w-5 text-white " />

                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" className=" bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                            <InformationCircleIcon className="h-5 w-5 text-white" />

                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

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
                 
            </div>



        </>
    )
}

export default navaddmin