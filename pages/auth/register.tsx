import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Signin from '@/components/loginForm'
import { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";

const register = () => {
    const [selectedGender, setSelectedGender] = useState(0);
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue: any) => {
        //console.log("newValue:", newValue);
        setValue(newValue);
    }
    return (
        <section className="bg-gray-100 font-mtsans">
            <div className="flex flex-col items-center justify-center px-6 my-10 sm:my-12 md:my-14">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="font-mtserif text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create and account
                        </h1>
                        <p className="font-mtsans text-md font-normal leading-tight tracking-tight text-gray-600">
                            You can save time during checkout, provide your credentials and checkout faster.
                        </p>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div className='flex flex-col md:flex-row gap-10'>
                                <div className='flex-1'>
                                    <h3 className="block text-md font-medium text-gray-900">Account Information (*)</h3>
                                    <div className="relative z-0 w-full my-6 group text-left">
                                        <input type="text" name="floating_name" id="floating_name" className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                    </div>
                                    <div className="relative z-0 w-full my-6 group text-left">
                                        <input type="email" name="floating_email" id="floating_email" className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                    </div>
                                    <div className="relative z-0 w-full my-6 group text-left">
                                        <input type="password" name="floating_password" id="floating_password" className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                        <p className='text-xs my-2 italic'>Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.</p>
                                    </div>
                                    <div className="relative z-0 w-full my-6 group text-left">
                                        <input type="password" name="floating_confirm_password" id="floating_confirm_password" className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_confirm_password" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <h3 className="block text-md font-medium text-gray-900">Contact (Optional)</h3>
                                    <div className="relative z-0 w-full my-6 group text-left">
                                        <input type="tel" name="floating_phone" id="floating_phone" className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " />
                                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                                    </div>
                                    <h3 className="block text-md font-medium text-gray-900 mb-2">Gender (Optional)</h3>
                                    <div className="flex items-center mb-2 pl-4">
                                        <input
                                            id="radio_female"
                                            type="radio"
                                            value="0"
                                            name="radio_gender"
                                            className="w-4 h-4 text-gray-700 bg-gray-100 border-gray-300"
                                            checked={selectedGender === 0}
                                            onChange={() => setSelectedGender(0)}
                                            defaultChecked={true}
                                        />
                                        <label htmlFor="radio_female" className="ml-2 text-md font-normal text-gray-900 dark:text-gray-300">Female</label>
                                    </div>
                                    <div className="flex items-center mb-3 pl-4">
                                        <input
                                            id="radio_male"
                                            type="radio"
                                            value="1"
                                            name="radio_gender"
                                            className="w-4 h-4 text-gray-700 bg-gray-100 border-gray-300"
                                            checked={selectedGender === 1}
                                            onChange={() => setSelectedGender(1)}
                                        />
                                        <label htmlFor="radio_male" className="ml-2 text-md font-normal text-gray-900 dark:text-gray-300">Male</label>
                                    </div>
                                    <h3 className="block text-md font-medium text-gray-900 mt-6 md:mt-0 mb-2">Birthday (Optional)</h3>
                                    <div className="flex items-center mb-6 md:mb-2">
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
                                    <label htmlFor="underline_select" className="sr-only">Underline select</label>
                                    <select id="underline_select" className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer">
                                        <option selected disabled>Relationship Status (optional)</option>
                                        <option value="Marriged">Marriged</option>
                                        <option value="Engaged">Engaged</option>
                                        <option value="Single">Single</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                                </div>
                                <div className="ml-3 text-md">
                                    <label htmlFor="terms" className="font-normal text-gray-500">I accept the <a className="font-medium text-gray-900 hover:underline" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <div className="block pt-4 pb-6">
                                <button type="submit" className="w-full bg-[#0F172A] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center">Create an account</button>
                            </div>
                            <p className="text-md font-normal text-gray-500">
                                Already have an account? <Signin classNames={"inline-block text-md font-semibold leading-6 text-gray-900 w-auto hover:underline"} />
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props: {

        }
    }
}

export default register