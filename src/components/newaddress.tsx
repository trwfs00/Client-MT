import React, { useState } from 'react'
import { Switch } from '@headlessui/react'





function newaddress() {
    const [enabled, setEnabled] = useState(false)
    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <div className="flex flex-col items-center justify-center px-6 my-10 sm:my-12 md:my-14">
                <h1 className="sm:text-xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
                    New Address</h1>
                <form>
                    <h1 className="sm:text-l text-l font-medium title-font mb-4 text-gray-900 ">
                        Contact (*)</h1>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_password" id="floating_password"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="tel" name="floating_tel" id="floating_tel"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                    </div>
                    <h1 className="sm:text-l text-l font-medium title-font mb-4 text-gray-900 ">
                        Address (*)</h1>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <select id="underline_select"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer">
                            <option selected disabled>Province</option>
                            <option value="Marriged">ลงกา</option>
                            <option value="Engaged">กรุงโรม</option>
                            <option value="Single">ทะเล</option>
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
                            required />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">District</label>
                    </div>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <input type="text" name="floating_subdis" id="floating_subdis"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sub-district</label>
                    </div>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <input type="text" name="floating_subdis" id="floating_subdis"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street Name, Building, House No.</label>
                    </div>
                    <div className="inline-block relative w-full  z-0  mb-6 group">
                        <input type="text" name="floating_subdis" id="floating_subdis"
                            className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                            placeholder=" "
                            required />
                        <label
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Post Code</label>
                    </div>
                    <div className="flex justify-between w-full">
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
                    </div>
                    <button type="button" className="w-full px-5 py-2.5 text-sm font-medium text-white bg-[#1F304A] hover:bg-gray-800 focus:outline-none  rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">Submit</button>

                </form>
            </div>
        </div>

    )
}

export default newaddress