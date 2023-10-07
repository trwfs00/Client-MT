import { PaperClipIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import MyBest from '@/images/best.svg'
import { BriefcaseIcon, CalendarIcon, CameraIcon, CurrencyDollarIcon, EnvelopeIcon, InformationCircleIcon, MagnifyingGlassIcon, MapPinIcon, PencilIcon, PencilSquareIcon, PhoneIcon, PhotoIcon, PlusCircleIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline';

import En from "@/images/En.svg"
import Datepicker from 'react-tailwindcss-datepicker';
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const country = [
    {
        id: 1,
        name: 'Thailand'
    },
    {
        id: 2,
        name: 'Finland'
    },
    {
        id: 3,
        name: 'Lao'
    },
]
const relationship = [
    {
        id: 1,
        name: 'Single'
    },
    {
        id: 2,
        name: 'Married'
    },
    {
        id: 3,
        name: 'Divorce'
    },
]




function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export default function Profile() {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    const [provinces, setProvinces] = useState([] || [
        { "province": "กระบี่" }, { "province": "กรุงเทพมหานคร" }, { "province": "กาญจนบุรี" }, { "province": "กาฬสินธุ์" }
    ]);
    
const [selectedProvince, setSelectedProvince] = useState();

    const handleValueChange = (newValue: any) => {
        //console.log("newValue:", newValue);
        setValue(newValue);
    }

    useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const resProvinces = await fetch('https://ckartisan.com/api/provinces');
        const provinceData = await resProvinces.json();
        setProvinces(provinceData);
        console.log(provinces);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProvinces();
  }, [])
  useEffect(()=>{
    console.log(provinces)
  },[provinces])

    interface Province {
        province: string;
    }

    interface Ptest {
        "id": number,
        "name_th": string,
        "name_en": string,
        "geography_id": number,
        "created_at": string,
        "updated_at": string,
        "deleted_at": null
    }


    // const callProvinces = async () => {
    //     try {
    //         const res = await fetch('https://ckartisan.com/api/provinces')
    //         const provinces = await res.json()
    //         // setProvinces(provinces)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

const [selected, setSelected] = useState(country[0]);
const [selectedre, setSelectedre] = useState(relationship[0]);


console.log(provinces)
return (
    <div className='p-4 sm:ml-64'>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white ">
            <div className='px-20'>
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="min-w-0 flex">
                        <div className="flex items-center justify-center  mt-10  ">
                            <label htmlFor="dropzone-file" className="  flex flex-col items-center justify-center border-2 border-gray-100 rounded-full cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                                <div className="flex flex-col items-center justify-center ">
                                    <Image className=" rounded-xl m-auto  opacity-40  hover:opacity-70 " width={150} height={100} src={En} alt="Logo" />
                                    <CameraIcon className="h-8 w-8 absolute text-gray-500" />
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <div className='m-20 '>
                            <h2 className="text-2xl  font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                Profile
                            </h2>
                            <span className=''>Lorem ipsum dolor sit amet </span>
                        </div>
                    </div>
                    <div className="mt-5 flex lg:ml-4 lg:mt-0">
                        <span className="hidden sm:block">
                            <button
                                type="button"
                                className="inline-flex items-center rounded-md bg-gray-800 px-5 py-2 text-sm font-semibold text-white shadow-sm  hover:bg-gray-600"
                            >
                                <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-white" aria-hidden="true" />
                                Edit
                            </button>
                        </span>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-6">
                                    <div className="flex items-center border-b border-gray-300 py-2">
                                        <input className="appearance-none border-none bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gray-900 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Full name" aria-label="Full name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Contact</dt>
                            <div className="sm:col-span-1">

                                <div className="flex items-center border-b border-gray-300 py-2">
                                    <PhoneIcon className="h-6 w-6 text-gray-300" />
                                    <input className="appearance-none  border-none bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-gray-900 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Phone number" aria-label="Full name" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Relationship (optional)</label>
                            <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  ">
                                <option selected>Relationship </option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorce">Divorce</option>
                            </select>
                        </div>
                        
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Birthday (optional)</dt>


                            <Datepicker
                                useRange={false}
                                asSingle={true}
                                showShortcuts={true}
                                primaryColor={"blue"}
                                value={value}
                                onChange={handleValueChange}
                                inputClassName={'py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 '}
                            />
                            {/* <input datepicker datepicker-autohide type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Select date"/> */}

                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Gender(optional)</dt>
                            <fieldset>
                                <div className=" space-y-6">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="push-everything"
                                            name="push-notifications"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-600">
                                            Female
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="push-email"
                                            name="push-notifications"
                                            type="radio"
                                            className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-600">
                                            Male
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
)
}
