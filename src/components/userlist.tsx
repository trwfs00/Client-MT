import { MagnifyingGlassIcon, PlusCircleIcon, TrashIcon, PencilSquareIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import Diff from '@/components/diffFromHuman'
import Pe from '@/images/person-icon-svg-2.jpg'
import router from 'next/router';
import Swal from 'sweetalert2';

type Props = {
    datas: Data[];
};

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
    isAdmin:string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
};

function userlist({ datas }: Props) {

    const handleDelete = async (UserId: any) => {
        Swal.fire({
            title: 'Delete User',
            text: 'Are you sure you want to delete this User?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
        }).then(async (result: { isConfirmed: any; }) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:8080/user/deleteUser/${UserId}`, {
                        method: 'DELETE',
                    });

                    if (response.ok) {
                        Swal.fire('Deleted!', 'The User has been deleted.', 'success').then(async (result: { isConfirmed: any; }) => {
                            if (result.isConfirmed) {
                                await router.reload(); // Redirect to the desired page
                            }
                        });
                        // Optionally, you can refresh the product list or handle the deletion UI logic here.
                    } else {
                        Swal.fire('Error', 'Failed to delete the User.', 'error');
                    }
                } catch (error) {
                    Swal.fire('Error', 'An error occurred while deleting the User.', 'error');
                }
            }
        });
    };

  return (
    <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    {/* Page content here */}
                    <h1 className='text-xl font-bold mt-10 ml-10'>User List</h1>
                    <div className='flex justify-between my-5'>
                        <div className=''>
                            <div className=" relative mx-auto text-gray-600">
                                <input className="border-2 ml-10 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm "
                                    type="search" name="search" placeholder="Search" />
                                <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 my-5">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-white uppercase text-center bg-slate-700">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Password
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        profile_picture
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created_at
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Manage
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                            {datas?.length > 0 ? (
                                datas.map((user) => (
                                    <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.email}
                                    </th>
                                    <td className="px-6 py-4">
                                        {/* {user.password} */}
                                        *******************
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.fullname}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.phone || ""}
                                    </td>
                                    <td className="px-6 py-4 flex text-center justify-center">
                                        <Image className="h-20 w-auto " width={150} height={150} src={user.profile_picture || Pe} alt={user.profile_picture || ""} />
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.isAdmin ? (
                                            <>Admin</>
                                        ):(
                                            <>User</>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Diff timestamp={user.created_at }/>
                                    </td>
                                    <td className="">
                                            <button type="button" onClick={() => handleDelete(user._id)} className="text-white bg-red-500 hover:bg-red-700  font-medium rounded-lg text-sm p-2  text-center inline-flex items-center  ">
                                                <TrashIcon className="h-5 w-5 text-white" />
                                            </button>
                                        <Link href={`./UserList/Edit/${user._id}`} className="text-md font-normal leading-6 text-gray-900">
                                            <button type="button" className=" bg-yellow-400 hover:bg-yellow-600 ml-2.5  font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                                <PencilSquareIcon className="h-5 w-5 text-white " />
                                            </button>
                                        </Link>
                                        <Link href={`./UserList/${user._id}`}>
                                            <button type="button" className=" bg-blue-700 ml-3 hover:bg-blue-800  font-medium rounded-lg text-sm p-2 text-center inline-flex items-center  ">
                                                <InformationCircleIcon className="h-5 w-5 text-white" />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                    )) 
                            ) : (
                                <tr>
                                    <td colSpan={8} className='text-white p-4'>ไม่มีผู้ใช้งาน</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
  )
}

export default userlist