import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useRouter } from 'next/router';

type Props = {
    datas: Data[];
};

type Data = {
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

function newaddress() {

    const [enabled, setEnabled] = useState(false)

    const router = useRouter();
    const { id } = router.query;

    const [Contact, setContact] = useState({ fullname: "", phonenumber: "" });
    const [Address, setAddress] = useState({
        province: "",
        district: "",
        subdistrict: "",
        streetname: "",
        postcode: ""
    });
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log('Submit button clicked');
        console.log('Users_idUsers:', id);
        console.log('Contact.fullname:', Contact.fullname);
        console.log('Contact.phonenumber:', Contact.phonenumber);
        console.log('Address.province:', Address.province);
        console.log('Address.district:', Address.district);
        console.log('Address.subdistrict:', Address.subdistrict);
        console.log('Address.streetname:', Address.streetname);
        console.log('Address.postcode:', Address.postcode);
        if (
            id &&
            Contact.fullname &&
            Contact.phonenumber &&
            Address.province &&
            Address.district &&
            Address.subdistrict &&
            Address.streetname &&
            Address.postcode
        ) {
            try {
                const response = await fetch(`http://localhost:8080/user/add/Address/${id}`, {
                    method: 'PUT', // Change the method to PUT
                    body: JSON.stringify({
                        Users_idUsers: id,
                        Contact: {
                            fullname: Contact.fullname,
                            phonenumber: Contact.phonenumber
                        },
                        Address: {
                            province: Address.province,
                            district: Address.district,
                            subdistrict: Address.subdistrict,
                            streetname: Address.streetname,
                            postcode: Address.postcode
                        }
                    }),
                    headers: {
                        Accept: 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    router.push(`/User/Address/${id}`);
                    console.log(data);
                    // Rest of your code
                } else {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
            } catch (error: any) {
                setError(error);
                console.log(error);
            }
        } else {
            setError('error');
            console.log(error);
        }
    };


    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <div className="flex flex-col items-center justify-center px-6 my-10 sm:my-12 md:my-14">
                <h1 className="sm:text-xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
                    New Address</h1>
                <form onSubmit={handleSubmit}>
                    <h1 className="sm:text-l text-l font-medium title-font mb-4 text-gray-900 ">
                        Contact (*)</h1>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_password" id="floating_password"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required
                            onChange={(e) => setContact({ ...Contact, fullname: e.target.value })}
                            value={Contact.fullname} />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="tel" name="floating_tel" id="floating_tel"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required
                            onChange={(e) => setContact({ ...Contact, phonenumber: e.target.value })}
                            value={Contact.phonenumber} />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                    </div>
                    <h1 className="sm:text-l text-l font-medium title-font mb-4 text-gray-900 ">
                        Address (*)</h1>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <select id="underline_select"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            onChange={(e) => setAddress({ ...Address, province: e.target.value })}
                            value={Address.province}
                        >
                            <option selected disabled>Province</option>
                            <option value="Khon kaen">Khon kaen</option>
                            <option value="Bangkok">Bangkok</option>
                            <option value="Chaiyaphum">Chaiyaphum</option>
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
                            onChange={(e) => setAddress({ ...Address, subdistrict: e.target.value })}
                            value={Address.subdistrict}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sub-district</label>
                    </div>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <input type="text" name="floating_subdis" id="floating_subdis"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required
                            onChange={(e) => setAddress({ ...Address, streetname: e.target.value })}
                            value={Address.streetname}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street Name, Building, House No.</label>
                    </div>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <input type="text" name="floating_subdis" id="floating_subdis"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required
                            onChange={(e) => setAddress({ ...Address, postcode: e.target.value })}
                            value={Address.postcode}
                        />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Post Code</label>
                    </div>
                    <button type="submit" className="w-full px-5 py-2.5 text-sm font-medium text-white bg-[#1F304A] hover:bg-gray-800 focus:outline-none rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    )
}

export default newaddress