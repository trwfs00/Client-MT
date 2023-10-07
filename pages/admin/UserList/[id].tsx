import { user } from '@nextui-org/react'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Pe from '@/images/person-icon-svg-2.jpg'
import Image from 'next/image';


type PageParams = {
    id: string
}

type ContentPageProps = {
    data: Data
}

type Props = {
    datas: Data[];
}

type Data = {
    _id: string,
    email: string,
    password: string,
    fullname: string,
    phone: string,
    dateOfbirth: Date,
    gender: string,
    profile_picture: string,
    relationship: string,
    isAdmin: boolean,
    created_at: string,
    updated_at: string,
    deleted_at: Date,
}

export async function getServerSideProps({ params }
    : GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<ContentPageProps>> {
    try {
        let response = await fetch('http://localhost:8080/user/oneUser/' + params?.id)
        let responeFromServer: Data = await response.json()
        console.log(responeFromServer)
        return {
            props: {
                data: {
                    _id: responeFromServer._id,
                    email: responeFromServer.email,
                    password: responeFromServer.password,
                    fullname: responeFromServer.fullname,
                    phone: responeFromServer.phone,
                    dateOfbirth: responeFromServer.dateOfbirth,
                    gender: responeFromServer.gender,
                    profile_picture: responeFromServer.profile_picture,
                    relationship: responeFromServer.relationship,
                    isAdmin: responeFromServer.isAdmin,
                    created_at: responeFromServer.created_at,
                    updated_at: responeFromServer.updated_at,
                    deleted_at: responeFromServer.deleted_at || ""
                },
            },
        }
    } catch (error) {
        console.error(error)
        return {
            props: {
                data: {
                    _id: '',
                    email: '',
                    password: '',
                    fullname: '',
                    phone: '',
                    dateOfbirth: new Date(),
                    gender: '',
                    profile_picture: '',
                    relationship: '',
                    created_at: '',
                    updated_at: '',
                    deleted_at: new Date(),
                    isAdmin: false
                },
            },
        }
    }
}

function index({ data }: ContentPageProps) {

    const { _id, email, password, fullname, phone, dateOfbirth, gender, profile_picture, relationship, isAdmin, created_at, updated_at, deleted_at,  } = data
    return (
        <div className=" my-4 w-full max-w-2xl mx-auto">
                <div className="space-y-12">
                    <div className="border-b  border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full flex justify-center items-center">
                                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                        {profile_picture ? (
                                            <>
                                                <div style={{ width: '200px', height: '150px', overflow: 'hidden' }}>
                                                    <Image
                                                        src={profile_picture}
                                                        alt="Logo"
                                                        width={200}
                                                        height={150}
                                                        style={{ objectFit: 'fill' }}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            // If profile_picture is not available
                                            <>
                                                <div style={{ width: '200px', height: '150px', overflow: 'hidden' }}>
                                                    <Image
                                                        src={Pe}
                                                        alt="Logo"
                                                        width={200}
                                                        height={150}
                                                        style={{ objectFit: 'fill' }}
                                                    />
                                                </div>
                                            </>
                                        )}

                                </div>
                            </div>

                            <div className="sm:col-span-3 text-center justify-center">
                                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                    Status
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="isadmin"
                                        name="isadmin"
                                        autoComplete="isadmin"
                                        value={isAdmin ? "Admin" : "User"}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        disabled
                                    >
                                        <option value={"Admin"} selected={isAdmin === true} >Admin</option>
                                        <option value={"User"} selected={isAdmin === false} >User</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={email ? email : ""}
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="password"
                                        id="password"
                                        value={"********************"}
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={fullname ? fullname : ""}
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contact
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="tel"
                                        name="contact"
                                        id="contact"
                                        value={phone ? phone : ""}
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="relationship" className="block text-sm font-medium leading-6 text-gray-900">
                                    Relationship
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="relationship"
                                        name="relationship"
                                        autoComplete="relationship"
                                        value={relationship ? relationship : ""}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        disabled
                                    >
                                        <option value={"Married"} selected={relationship === "Married"}>Married</option>
                                        <option value={"Engaged"} selected={relationship === "Engaged"} >Engaged</option>
                                        <option value={"Single"} selected={relationship === "Single"} >Single</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="Birthday" className="block text-sm font-medium leading-6 text-gray-900">
                                    Birthday
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="Birthday"
                                        id="Birthday"
                                        value={dateOfbirth ? (dateOfbirth instanceof Date ? dateOfbirth.toISOString().split('T')[0] : '') : ''}
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                    Gender
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="gender"
                                        name="gender"
                                        autoComplete="gender"
                                        value={gender ? gender : ""}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        disabled
                                    >
                                        <option value={"Male"} selected={gender === "Male"} >Male</option>
                                        <option value={"Female"} selected={gender === "Female"} >Female</option>
                                        <option value={"Not Specified"} selected={gender === "Not Specified"} >Not Specified</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default index