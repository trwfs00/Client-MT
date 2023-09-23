import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import GoogleIcon from '@/components/google'
import Link from 'next/link'
import Signup from '@/components/signupForm'

export default function loginForm(props: any) {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const handleModal = () => {
        if (open || !open) setOpen(!open)
    }

    return (
        <>
            <button type="button"
                className={props.classNames + " w-full lg:w-auto text-left"}
                onClick={handleModal}
            >
                {props?.title ? (
                    <>
                        {props.title}
                    </>
                ):(
                    <>
                      Sign in &rarr;
                    </>
                )}
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:py-4">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <button
                                            type="button"
                                            className="inline-flex fixed right-4 top-4 rounded-full bg-gray-100 p-1"
                                            onClick={() => setOpen(false)}
                                        >
                                            <XMarkIcon className="h-6 w-6 text-gray-700" />
                                        </button>
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                                                <Dialog.Title as="h3" className="text-xl md:text-2xl font-semibold leading-6 mb-4 text-gray-900">
                                                    Welcome back!
                                                </Dialog.Title>
                                                <div className="mt-2 text-left">
                                                    <p className="text-sm text-center text-gray-500">
                                                        Welcome back! Enter your credentials and access your shopping bag.
                                                    </p>
                                                    <div className="relative z-0 w-full my-6 group text-left">
                                                        <input type="email" name="floating_email" id="floating_email" className="block py-3.5 px-0 w-full text-md font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                                    </div>
                                                    <div className="relative z-0 w-full mb-6 group">
                                                        <input type="password" name="floating_password" id="floating_password" className="block py-3.5 px-0 w-full text-md font-light bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-700 focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white px-4 py-3 sm:flex sm:flex-col gap-4 sm:gap-2 sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex mb-2 w-full justify-center rounded-md bg-[#0F172A] px-2 py-3 text-md font-semibold text-white  hover:bg-[#161F34] sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                        >
                                            Sign in
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex mb-6 w-full justify-center rounded-md bg-white px-2 py-3 text-md font-semibold text-gray-900 hover:bg-gray-50 border border-gray-100 sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                        >
                                            <GoogleIcon classNames="w-6 h-6 mr-2.5" /> Sign in with Google
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-white px-2 py-3 text-md font-normal text-gray-900 sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                        >
                                            Don't have an account? <Link href={"#"} className='text-md font-semibold ml-2'>Signup</Link>
                                        </button>
                                        <Signup/>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}