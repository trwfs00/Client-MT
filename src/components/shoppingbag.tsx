import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ClockIcon, MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Inter } from 'next/font/google'
const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    variable: '--font-inter'
})

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

export default function Example() {
    const [open, setOpen] = useState(false)

    return (
        <>

            <button
                onClick={() => setOpen(!open)}
                className="flex lg:flex text-md font-normal leading-6 text-gray-900">
                <ShoppingBagIcon className="h-5 w-5 text-[#424242] translate-y-[0.15em]" />
            </button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className={`relative z-50 ${inter.className}`} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-lg">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-xl font-semibold text-gray-900">Shopping bag ({products.length})</Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="absolute -inset-0.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {products.map((product) => (
                                                                <li key={product.id} className="flex py-6">
                                                                    <div className="flex items-center mx-3">
                                                                        <input
                                                                            id="comments"
                                                                            name="comments"
                                                                            type="checkbox"
                                                                            className="h-4 w-4 rounded border-gray-300 text-gray-700 focus:ring-gray-900"
                                                                        />
                                                                    </div>

                                                                    <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={product.imageSrc}
                                                                            alt={product.imageAlt}
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <div className="flex flex-col">
                                                                                    <div className='flex flex-row mb-1'>
                                                                                        <ClockIcon className="h-4 w-4 text-gray-500" />
                                                                                        <p className='ml-1 text-xs text-gray-400 font-normal'>27m. ago</p>
                                                                                    </div>
                                                                                    <h3>
                                                                                        <a href={product.href}>{product.name}</a>
                                                                                    </h3>
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex flex-row gap-8'>
                                                                                <span>
                                                                                    <p className="mt-1 text-sm text-gray-500 inline">Size: </p>
                                                                                    <p className="mt-1 text-sm text-gray-700 inline">{product.color}</p>
                                                                                </span>
                                                                                <span>
                                                                                    <p className="mt-1 text-sm text-gray-500 inline">Color: </p>
                                                                                    <p className="mt-1 text-sm text-gray-700 inline">{product.color}</p>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm mt-1">
                                                                            <div className='flex gap-2'>
                                                                                <div className="flex border rounded-md p-2 px-3">
                                                                                    <button
                                                                                        type="button"
                                                                                    >
                                                                                        <TrashIcon className="h-4 w-4 text-[#424242]" />
                                                                                    </button>
                                                                                </div>
                                                                                <div className="flex border rounded-md p-2 px-2">
                                                                                    <button
                                                                                        type="button"
                                                                                    >
                                                                                        <MinusIcon className="h-4 w-4 text-g[#424242]" />
                                                                                    </button>
                                                                                    <p className='text-md font-semibold mx-7'>
                                                                                        1
                                                                                    </p>
                                                                                    <button
                                                                                        type="button"
                                                                                    >
                                                                                        <PlusIcon className="h-4 w-4 text-g[#424242]" />
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                            <p className="text-gray-800 text-xl font-semibold mt-2">{product.price}</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div className="flex justify-between text-md font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>$262.00</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6">
                                                    <a
                                                        href="#"
                                                        className="flex items-center justify-center rounded-md border border-transparent bg-[#0F172A] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#161F34] transition-all duration-200 hover:scale-105"
                                                    >
                                                        Checkout
                                                    </a>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-md text-gray-500">
                                                    <button
                                                        type="button"
                                                        className="font-medium text-[#0F172A] hover:text-[#161F34] transition-all duration-200 hover:scale-105"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <b className='font-normal'>or</b> Continue Shopping
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
