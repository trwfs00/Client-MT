
import { Inter } from 'next/font/google'
import MyNav from '@/components/navigation'
import Checkbox from '@/components/checkbox'
import MyLogin from '@/components/loginForm'

import { useState } from "react";
const inter = Inter({ subsets: ['latin'] })

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
   
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    return (

        <div className={inter.className}>
            <MyNav/>
            <div className="p-10  mx-auto  bg-white rounded-xl shadow-sm overflow-hidden max-w-screen-xl">
                <h1 className='text-2xl font-bold py-4'>Sign in</h1>
                <p className='font-light text-md'>Welcome back! Enter your credentials and access your shopping bag.</p>
                <div className='flex flex-row flex-wrap'>
                    <div className='flex flex-col'>
                        <MyLogin/>
                    </div>
                </div>
            </div>

{/* <div>

            <div className="p-10  mx-auto  bg-white rounded-xl shadow-md overflow-hidden max-w-screen-xl">
                <div className="">
                    <div >
                        <p className="text-3xl">Sign in</p>
                        <p className="mt-3">Welcome back! Enter your credentials and access your shopping bag.</p>
                        <form className="w-full max-w-sm">


                            <input className="w-full px-4 mt-10 py-2 text-base border border-gray-300rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1" id="grid-first-name" type="text" placeholder="Email" />




                            <div className="relative container mx-auto mt-10">
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full px-4  py-2 text-base border border-gray-300rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1" />
                                <button
                                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                    onClick={togglePasswordVisibility}
                                >
                                    {isPasswordVisible ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>

                        </form>

                        <div className="mt-10 flex items-center">
                            <div>
                                <Checkbox/>
                            </div> */}
                            {/* <div className='ml-20'>
                            <a
                            href="#!"
                            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >
                                <span>Forgot password?</span>
                                </a></div> */}
                        {/* </div>
                        
                    </div> */}


                    {/* <div><p className="text-3xl">Create your Account</p>
                        <p className="mt-3">You can save time during checkout, provide your credentials and checkout faster.</p></div> */}
                {/* </div>

            </div>


        </div> */}

        </div>


    )

}