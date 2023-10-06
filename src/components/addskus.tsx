import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { button, input } from '@material-tailwind/react';
import Ring from "@/images/ring.svg"
import { ShoppingBagIcon, ShoppingCartIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function addskus() {

   
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
                {/* Page content here */}
                <h1 className='text-xl font-bold mt-10 ml-10'>Add SKUs</h1>
                <div className='contrainer mx-10 my-2'>

                    <div className="grid grid-cols-2 gap-4 bg-white sm:rounded-lg mt-5 shadow">

                        <div className='m-5 '>
                            <div className='flex  justify-center items-center mt-5'>
                                <Carousel className="w-1/2 h-64" showIndicators={false} showThumbs={false}>
                                    <div>
                                        <Image className=""  src={Ring} alt="Logo" />
                                    </div>
                                    <div>
                                        <Image className="" src={Ring} alt="Logo" />
                                    </div>
                                    <div>
                                        <Image className="" src={Ring} alt="Logo" />
                                    </div>
                                    <div>
                                        <Image className="" src={Ring} alt="Logo" />
                                    </div>
                                    <div>
                                        <Image className="" src={Ring} alt="Logo" />
                                    </div>
                                </Carousel>
                                {/* <Carousel className="w-1/2 h-64" showIndicators={false} showThumbs={false}>
                                    {idPictures && idPictures.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {idPictures.map((image, index) => (
                                                <div>
                                                    <Image
                                                        key={index}
                                                        src={image.path}
                                                        alt="Logo"
                                                        width={100}
                                                        height={100}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}
                                </Carousel> */}
                          </div>               
                            <div className='flex justify-center items-center my-5'>
                                <div className="form-control w-full max-w-xs ">
                                    <label className="label">
                                        <span className="label-text">Pick a file</span>

                                    </label>
                                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                        </div>
                        <div className=' p-5 mt-5'>
                            <div className="form-control w-full max-w-xs  ">
                                <label className="label">
                                    <span className="label-text font-medium ">Colors</span>
                                </label>
                                <select className="select select-bordered border-gray-800">
                                    <option disabled selected>White gold </option>
                                    <option>Rose gold </option>
                                    <option>Gold</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium ">Glodwight</span>
                                </label>
                                <input type="text" placeholder="Glodwight" className="input border-gray-800  w-full max-w-xs " />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium ">Price</span>
                                </label>
                                <input type="text" placeholder="Price" className="input border-gray-800  w-full max-w-xs " />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium ">Cost</span>
                                </label>
                                <input type="text" placeholder="Cost" className="input border-gray-800  w-full max-w-xs " />
                            </div>
                        </div>
                        <div className='col-span-2 flex justify-center items-center mb-10 '>
                            <button className="btn btn-neutral text-white">Add SKUs</button>
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
