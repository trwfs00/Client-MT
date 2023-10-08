import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

type PageParams = {
    id: string;
}

type Props = {
    datas: Data[];
};

type ContentPageProps = {
    data: Data;
}

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

function newaddress({ data: { _id, Users_idUsers, Contact, Address } }: ContentPageProps) {
    const [enabled, setEnabled] = useState(false)

    const router = useRouter();
    const { id } = router.query;

    const [_Users_idUsers, setUsers_idUsers] = useState(Users_idUsers)
    const [_Contact, setContact] = useState({ fullname: Contact.fullname, phonenumber: Contact.phonenumber });
    const [_Address, setAddress] = useState({
        province: Address.province,
        district: Address.district,
        subdistrict: Address.subdistrict,
        streetname: Address.streetname,
        postcode: Address.postcode
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        // console.log(adviser)
        if (_id && Users_idUsers && Contact && Address) {
            console.log(JSON.stringify({ _id, _Users_idUsers, _Contact, _Address }))
            try {
                let response = await fetch('http://localhost:8080/address/update/' + _id, {
                    method: "PUT",
                    body: JSON.stringify({
                        Users_idUsers:_Users_idUsers,
                        Contact: {
                            fullname: _Contact.fullname,
                            phonenumber: _Contact.phonenumber
                        },
                        Address: {
                            province: _Address.province,
                            district: _Address.district,
                            subdistrict: _Address.subdistrict,
                            streetname: _Address.streetname,
                            postcode: _Address.postcode
                        }
                    }),
                    headers: {
                        Accept: "application/json , text/plain, */*",
                        "Content-Type": "application/json"
                    }
                })
                if (response.ok) {
                    const data = await response.json();
                    router.push(`/User/Address/${_Users_idUsers}`);
                    console.log(data);
                    // Rest of your code
                } else {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

            } catch (error: any) {
                console.log(error)
            }
        } else {
            return console.log("All fields are required!! MotherFUcker idiot")
        }

    }

    const handleDelete = async (addressId: any) => {
        Swal.fire({
            title: 'Delete Address',
            text: 'Are you sure you want to delete this Address?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
        }).then(async (result: { isConfirmed: any; }) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:8080/address/deleteAds/${addressId}`, {
                        method: 'DELETE',
                    });

                    if (response.ok) {
                        Swal.fire('Deleted!', 'The Address has been deleted.', 'success').then(async (result: { isConfirmed: any; }) => {
                            if (result.isConfirmed) {
                                await router.push(`/User/Address/${_Users_idUsers}`); // Redirect to the desired page
                            }
                        });
                        // Optionally, you can refresh the product list or handle the deletion UI logic here.
                    } else {
                        Swal.fire('Error', 'Failed to delete the Address.', 'error');
                    }
                } catch (error) {
                    Swal.fire('Error', 'An error occurred while deleting the Address.', 'error');
                }
            }
        });
    };

    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <div className="flex flex-col items-center justify-center px-6 my-10 sm:my-12 md:my-14">
                <h1 className="sm:text-xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
                    Edit Address</h1>
                <form onSubmit={handleSubmit}>
                    <h1 className="sm:text-l text-l font-medium title-font mb-4 text-gray-900 ">
                        Contact (*)</h1>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_password" id="floating_password"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required
                            onChange={(e) => setContact({ ..._Contact, fullname: e.target.value })}
                            value={_Contact.fullname} />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="tel" name="floating_tel" id="floating_tel"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required
                            onChange={(e) => setContact({ ..._Contact, phonenumber: e.target.value })}
                            value={_Contact.phonenumber} />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                    </div>
                    <h1 className="sm:text-l text-l font-medium title-font mb-4 text-gray-900 ">
                        Address (*)</h1>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <select id="underline_select"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            onChange={(e) => setAddress({ ..._Address, province: e.target.value })}
                            value={_Address.province}
                        >
                            <option disabled>Province</option>
                            <option value="Khon kaen" selected={Address.province === "Khon kaen"}>Khon kaen</option>
                            <option value="Bangkok" selected={Address.province === "Bangkok"} >Bangkok</option>
                            <option value="Chaiyaphum" selected={Address.province === "Chaiyaphum"} >Chaiyaphum</option>
                        </select>
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Province</label>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <input type="text" name="floating_dis" id="floating_dis"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required
                            onChange={(e) => setAddress({ ...Address, district: e.target.value })}
                            value={Address.district}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">District</label>
                    </div>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <input type="text" name="floating_subdis" id="floating_subdis"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required
                            onChange={(e) => setAddress({ ..._Address, subdistrict: e.target.value })}
                            value={_Address.subdistrict}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sub-district</label>
                    </div>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <input type="text" name="floating_subdis" id="floating_subdis"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required
                            onChange={(e) => setAddress({ ..._Address, streetname: e.target.value })}
                            value={_Address.streetname}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street Name, Building, House No.</label>
                    </div>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <input type="text" name="floating_subdis" id="floating_subdis"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required
                            onChange={(e) => setAddress({ ..._Address, postcode: e.target.value })}
                            value={_Address.postcode}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Post Code</label>
                    </div>
                    {/* <div className="flex justify-between w-full">
                        <h1 className="sm:text-l text-l font-medium title-font mb-4 text-gray-900 ">
                            Set as Default Address</h1>

                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-[#1F304A]' : 'bg-gray-700'}
          relative inline-flex h-[25px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                    </div> */}
                    <button
                        type="button"
                        onClick={() => handleDelete(_id)} // Use onClick instead of onSubmit
                        className="w-full px-5 py-2.5  mb-2 text-sm font-medium text-[#1F304A] bg-white focus:outline-none rounded-lg text-center"
                    >
                        Delete Address
                    </button>
                    <button type="submit" className="w-full px-5 py-2.5 text-sm font-medium text-white bg-[#1F304A] hover:bg-gray-800 focus:outline-none  rounded-lg text-center ">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default newaddress