import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import type { GetServerSidePropsContext, GetServerSidePropsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Pe from '@/images/person-icon-svg-2.jpg'
import { format } from 'date-fns';
import { useAuth } from '../AuthContext';
import Link from 'next/link';


type PageParams = {
    fullname: string
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
}

export async function getServerSideProps({ params }
    : GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<ContentPageProps>> {
    try {
        let response = await fetch('http://localhost:8080/user/detail/' + params?.fullname)
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
                    relationship: responeFromServer.relationship
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
                    relationship: ''
                },
            },
        }
    }
}

function index({ data: { _id, fullname, phone, dateOfbirth, gender, profile_picture, relationship } }: ContentPageProps) {

    const { auth, user } = useAuth();

    const router = useRouter();
    const h = 0;

    const [_fullname, setFullname] = useState(fullname)
    const [_phone, setphone] = useState(phone)
    const [_dateOfbirth, setdateOfbirth] = useState(dateOfbirth)
    const [_gender, setgender] = useState(gender)
    const [_profile_picture, setprofile_picture] = useState(profile_picture)
    const [_relationship, setrelationship] = useState(relationship)

    // console.log(_fullname)
    // console.log(user?.fullname)

    const [isEditing, setIsEditing] = useState(false);
    const [shouldSubmit, setShouldSubmit] = useState(false);

    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

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

    const toggleEdit = () => {
        setIsEditing(!isEditing);
        setShouldSubmit(false); // Reset the flag when toggling edit mode
    };


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (shouldSubmit) {
            try {
                // Your API call or data submission logic
                let response = await fetch('http://localhost:8080/user/EditUser/' + _id, {
                    method: 'put',
                    body: JSON.stringify({
                        fullname: _fullname,
                        phone: _phone,
                        dateOfbirth: _dateOfbirth,
                        gender: _gender,
                        relationship: _relationship,
                        base64: _profile_picture,
                    }),
                    headers: {
                        Accept: 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    // Form submission was successful
                    const data = await response.json();
                    setError('');
                    setMessage('Profile updated successfully!!');
                    console.log(data);
                    router.push(`/User/${_fullname}`);
                    setIsEditing(!isEditing);
                } else {
                    // Handle errors if needed
                    setError('Profile update failed');
                }
            } catch (error) {
                // Handle errors if needed
                setError('An error occurred');
            }
        } else {
            // User clicked "Submit" without actually changing anything
            setError('No changes to submit');
        }
    };

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
                                    {isEditing ? (
                                        // If isEditing is true
                                        _profile_picture ? (
                                            // If formData.profile_picture is available
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
                                            // If _profile_picture is not available
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
                                        )
                                    ) : (
                                        <div style={{ width: '200px', height: '150px', overflow: 'hidden' }}>
                                            <Image
                                                src={_profile_picture || Pe}
                                                alt="Logo"
                                                width={200}
                                                height={150}
                                                style={{ objectFit: 'fill' }}
                                            />
                                        </div>
                                    )}

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
                                        readOnly={isEditing === false}
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
                                        readOnly={isEditing === false}
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
                                        disabled={!isEditing}
                                    >
                                        <option value={"Married"} selected={user?.relationship === "Married"}>Married</option>
                                        <option value={"Engaged"} selected={user?.relationship === "Engaged"} >Engaged</option>
                                        <option value={"Single"} selected={user?.relationship === "Single"} >Single</option>
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
                                        value={_dateOfbirth ? _dateOfbirth.toISOString().split('T')[0] : ''}
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        readOnly={isEditing === false}
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
                                        disabled={!isEditing}
                                    >
                                        <option value={"Male"} selected={user?.gender === "Male"} >Male</option>
                                        <option value={"Female"} selected={user?.gender === "Female"} >Female</option>
                                        <option value={"Not Specified"} selected={user?.gender === "Not Specified"} >Not Specified</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    {isEditing ? (
                        <>
                            <button
                                type="submit"
                                onClick={() => setShouldSubmit(true)}
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={toggleEdit}
                                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ml-2"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            type="button"
                            onClick={toggleEdit}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Edit Profile
                        </button>
                    )}
                    <Link href={`../User/Address/${_id}`}>
                        <button
                            type="button"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Address
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default index