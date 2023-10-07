import React, { useEffect, useState } from 'react'
import En from "@/images/En.svg"
import Image from 'next/image';
import { CheckIcon, ChevronUpDownIcon, EnvelopeIcon, PencilIcon, PhoneIcon, PhotoIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Datepicker from 'react-tailwindcss-datepicker';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react'
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
function editadmin() {
  const [selected, setSelected] = useState(country[0]);
  const [selectedre, setSelectedre] = useState(relationship[0]);

  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });
  const handleValueChange = (newValue: any) => {
    //console.log("newValue:", newValue);
    setValue(newValue);
  }
  return (
    <div className='p-4 sm:ml-64 '>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
        <div className="grid  grid-flow-col gap-4">
          <div className=" border bg-white shadow-xl rounded-md ">
            <Image className=" rounded-xl m-auto mt-10" width={150} height={100} src={En} alt="Logo" />
            <span className='mt-10  flex justify-center items-center'>Jimimos eieieie</span>
            <span className='mt-5  flex justify-center items-center'>Admin</span>
          </div>
          
          <div className="col-span-2 border bg-white shadow-xl rounded-md">
            <div className="mt-10">
              <h1 className='text-center font-medium text-xl border-b pb-5 '>Edit Profile</h1>
            </div>
            <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 px-10 py-10">
              
              
              <div className="sm:col-span-3"> 
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Contact
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Relationship (optional)</label>
                <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  ">
                  <option selected>Relationship </option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorce">Divorce</option>
                </select>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Gender (optional)</label>
                <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  ">
                  <option selected>Gender</option>
                  <option value="Female">Female</option>
                  <option value="Men">Men</option>
                </select>
              </div>
              <div className="sm:col-span-4">

                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Status (select)</label>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                  <li>
                    <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer " required />
                    <label htmlFor="hosting-small" className="bg-gray-100 inline-flex items-center justify-between w-full p-2 text-gray-500  border border-gray-200 rounded-lg cursor-pointer    peer-checked:border-gray-600 peer-checked:text-gray-600 hover:text-gray-600 hover:bg-gray-100 ">
                        <div className="block">
                        <div className="w-full  ">Admin</div>
                          
                        </div>
                      </label>
                  </li>
                  <li>
                    <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer"/>
                    <label htmlFor="hosting-big" className="bg-gray-100 inline-flex items-center justify-between w-full p-2 text-gray-500  border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300   peer-checked:border-gray-600 peer-checked:text-gray-600 hover:text-gray-600 hover:bg-gray-100 ">
                        <div className="block">
                          <div className="w-full  ">User</div>
                          
                        </div>
                        
                      </label>
                  </li>
                </ul>

              </div>
              
              <div className="sm:col-span-3">
                <Datepicker
                  useRange={false}
                  asSingle={true}
                  showShortcuts={true}
                  primaryColor={"blue"}
                  value={value}
                  onChange={handleValueChange}
                  inputClassName={'py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 '}
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
              <div className='col-span-full'>
                <button type="button" className="text-white bg-[#0F172A] w-full hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Confirm
                </button>

              </div>

            </div>






          </div>

        </div>

      </div>

    </div>
  )
}

export default editadmin