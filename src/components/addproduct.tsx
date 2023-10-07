import Link from 'next/link';
import Image from 'next/image';
import { button, input } from '@material-tailwind/react';
import React from 'react'
import En from "@/images/En.svg"
import Ring from "@/images/ring.svg"
import { InformationCircleIcon, MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';

type Props = {
    datas: [Data]
}

type Data = {
    type: string,
    productName: string,
    productDesc: string,
    thumbnail: string
}

export const getServerSideProps = async () => {
    try {
        let response = await fetch('http://localhost:8080/product')
        let datas = await response.json()
        const test = 'test'
        return {
            props: { datas: JSON.parse(JSON.stringify(datas)) }
        }
    } catch (error) {
        console.error(error)
        return {
            props: { datas: [] },
        }
    }
}

export default function addproduct() {
    return (
       
            <div className=" ">
               
            <h1 className='text-xl  font-bold mt-10 ml-10'>Add Product </h1>
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
            
                    
        
    )
}
