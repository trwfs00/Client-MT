import { user } from '@nextui-org/react'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Pe from '@/images/person-icon-svg-2.jpg'
import Image from 'next/image';
import router from 'next/router'


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
                    dateOfbirth: responeFromServer.dateOfbirth || "",
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

    const { _id, email, password, fullname, phone, dateOfbirth, gender, profile_picture, relationship, isAdmin, created_at, updated_at, deleted_at, } = data

    const [_fullname, setFullname] = useState(fullname)
    const [_phone, setphone] = useState(phone)
    const [_dateOfbirth, setdateOfbirth] = useState(dateOfbirth)
    const [_gender, setgender] = useState(gender)
    const [_profile_picture, setprofile_picture] = useState(profile_picture)
    const [_relationship, setrelationship] = useState(relationship)
    const [_isAdmin, setIsAdmin] = useState(isAdmin); // Initialize based on the initial value from props or state


    function convertToBase64(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result as string;
                console.log(base64String); // สามารถใช้ base64String ต่อไปได้ตามต้องการ
                setprofile_picture(base64String)

            };

            reader.onerror = (error) => {
                console.log("Error: ", error);
            };

            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        console.log(_isAdmin)

        console.log(JSON.stringify({ _id, email, password, fullname, phone, dateOfbirth, gender, profile_picture, relationship, isAdmin }))
        try {
            let response = await fetch('http://localhost:8080/user/admin/EditUser/' + _id, {
                method: "PUT",
                body: JSON.stringify({
                    fullname: _fullname,
                    phone: _phone,
                    dateOfbirth: _dateOfbirth,
                    gender: _gender,
                    relationship: _relationship,
                    base64: _profile_picture,
                    isAdmin: _isAdmin,
                }),
                headers: {
                    Accept: "application/json , text/plain, */*",
                    "Content-Type": "application/json"
                }
            })
            if (response.ok) {
                const data = await response.json();
                router.push(`/admin/UserList`);
                console.log(data);
                // Rest of your code
            } else {
                throw new Error(`HTTP Error: ${response.status}`);
            }

        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(()=>{
        console.log("แอดมินบ่น่ะ: "+_isAdmin)
    },[_isAdmin])

    return (
        <div className=" my-4 w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit}>
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
                                    {_profile_picture ? (
                                        <>
                                            <div style={{ width: '200px', height: '150px', overflow: 'hidden' }}>
                                                <Image
                                                    src={_profile_picture}
                                                    alt="Logo"
                                                    width={200}
                                                    height={150}
                                                    style={{ objectFit: 'fill' }}
                                                />
                                            </div>
                                            <input
                                                type="file"
                                                className="file-input file-input-bordered w-full max-w-xs"
                                                accept="image/*"
                                                onChange={convertToBase64}
                                            />
                                        </>
                                    ) : (
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
                                            <input
                                                type="file"
                                                className="file-input file-input-bordered w-full max-w-xs"
                                                accept="image/*"
                                                onChange={convertToBase64}
                                            />
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
                                        onChange={(e) => setIsAdmin(e.target.value == "admin" ? true : false)}
                                        defaultValue={_isAdmin ? 'admin' : 'customer'}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value="admin"  >Admin</option>
                                        <option value="customber"  >User</option>
                                    </select>
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
                                        onChange={(e) => setFullname(e.target.value)}
                                        value={_fullname ? _fullname : ""}
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                        onChange={(e) => setphone(e.target.value)}
                                        value={_phone ? _phone : ""}
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                        onChange={(e) => setrelationship(e.target.value)}
                                        value={_relationship ? _relationship : ""}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value={"Married"} selected={_relationship === "Married"}>Married</option>
                                        <option value={"Engaged"} selected={_relationship === "Engaged"} >Engaged</option>
                                        <option value={"Single"} selected={_relationship === "Single"} >Single</option>
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
                                        onChange={(e) => setdateOfbirth(new Date(e.target.value))}
                                        value={_dateOfbirth ? (_dateOfbirth instanceof Date ? _dateOfbirth.toISOString().split('T')[0] : '') : ''}
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                        onChange={(e) => setgender(e.target.value)}
                                        value={_gender ? _gender : ""}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value={"Male"} selected={_gender === "Male"} >Male</option>
                                        <option value={"Female"} selected={_gender === "Female"} >Female</option>
                                        <option value={"Not Specified"} selected={_gender === "Not Specified"} >Not Specified</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-x-6">
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default index