import { PencilSquareIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import React from 'react'

type Props = {
    datas: Data[],
    Users_idUsers: string;
};

type Data = {
    _id: string,
    Users_idUsers: string,
    Contact: {
        fullname: string,
        phonenumber: string
    },
    Address: {
        province: string,
        district: string,
        subdistrict: string,
        streetname: string,
        postcode: string
    }
};

function myaddress({ datas, Users_idUsers }: Props) {
    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <h1 className="sm:text-xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
                My Address</h1>
            {/* ข้อมูล product */}
            <div className="w-full max-w-md lg:pr-4 bg-white sm:p-1 pr-4 mx-auto my-auto">
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {datas.length > 0 ? (
                            datas.map((address) => (
                                <li className="mb-3 mt-5" key={address._id}>
                                    <div className="flex items-center space-x-4 mb-3 my-2">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {address.Contact?.fullname} <span className="font-normal text-sm text-gray-500 dark:text-gray-400">| {address.Contact?.phonenumber}</span>
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                {address.Address?.streetname}, {address.Address?.subdistrict}, {address.Address?.district}, {address.Address?.province}, {address.Address?.postcode}
                                            </p>
                                            {/* <p className="text-sm text-gray-500 truncate mt-2 border border-gray-500 w-16 text-center">
                                                Default
                                            </p> */}
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <Link href={`../../User/Address/Editads/${address._id}`}>
                                                <PencilSquareIcon className="h-6 w-6 text-gray-500 hover:scale-105" />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="mb-3 mt-5">
                                <div className="flex items-center space-x-4 mb-3 my-2">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-4xl text-center font-medium text-gray-900 truncate dark:text-white">
                                            Now there is no address.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <Link href={`../../User/Address/Addads/${Users_idUsers}`}>
                    <div className='text-center flex justify-center group hover:text-gray-900 hover:scale-100'>
                        <PlusCircleIcon className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
                        <p className='text-sm text-gray-500 truncate pl-2 group-hover:text-gray-900'>Create New Address</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default myaddress
