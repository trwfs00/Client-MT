import Link from "next/link";
import {
    ArrowPathIcon,
    Bars3BottomLeftIcon,
    Bars3Icon,
    CalendarDaysIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    HeartIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from "next/image";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { useAuth } from '../AuthContext';


type Props = {
    datas: Data[];
};

type Data = {
    _id: string;
    type: string;
    productName: string;
    productDesc: string;
    thumbnail: string;
    idSKU: {
        _id: string;
        price: string;
    }[];
    created_at: string;
    updated_at: string;
    deleted_at: string;
};



const sortOptions = [
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const getServerSideProps = async () => {
    try {
        const response = await fetch('http://localhost:8080/product/');
        const datas = await response.json();

        return {
            props: { datas },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: { datas: [] },
        };
    }
}

export default function index({ datas }: Props) {

    const { auth, user } = useAuth();

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    console.log(datas)

    // const handleCart = async (e:any) => {
    //     e.preventDefault()

    //     const userID = user?._id

    //     try {
    //         await fetch('http://localhost:8080/cart/addcart',{
    //             method: "POST",
    //                     headers: { 'Content-Type': 'application/json' },
    //                     body: JSON.stringify({ userID, })
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (

        <div className="mx-auto max-w-7xl p-4 bg-white">
            
            <nav className="flex px-5 pt-4 pb-2 text-gray-700" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#0F172A]">
                                <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link href="/product" className="ml-1 text-sm font-medium text-gray-700 hover:text-[#0F172A] md:ml-2">Product</Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                                    Product Name
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>

            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button
                                        type="button"
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                        {subCategories.map((category) => (
                                            <li key={category.name}>
                                                <a href={category.href} className="block px-2 py-3">
                                                    {category.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                    {filters.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">{section.name}</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-6">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        defaultChecked={option.checked}
                                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-4">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span className="sr-only">View grid</span>
                            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                        </button> */}
                        <button
                            type="button"
                            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            onClick={() => setMobileFiltersOpen(true)}
                        >
                            <span className="sr-only">Filters</span>
                            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="pb-24 pt-6">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        {/* Filters */}
                        <form className="hidden lg:block">
                            <h3 className="sr-only">Categories</h3>
                            <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                {subCategories.map((category) => (
                                    <li key={category.name}>
                                        <a href={category.href}>{category.name}</a>
                                    </li>
                                ))}
                            </ul>

                            {filters.map((section) => (
                                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                    {({ open }) => (
                                        <>
                                            <h3 className="-my-3 flow-root">
                                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                        ) : (
                                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </h3>
                                            <Disclosure.Panel className="pt-6">
                                                <div className="space-y-4">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex items-center">
                                                            <input
                                                                id={`filter-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                defaultValue={option.value}
                                                                type="checkbox"
                                                                defaultChecked={option.checked}
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <label
                                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                className="ml-3 text-sm text-gray-600"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </form>

                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 m-auto">
                                {datas.map((product) => (
                                    <div className="grid group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full min-w-[18em] min-h-[22em] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={product.thumbnail}
                                                alt="product Img"
                                                // height={0}
                                                // width={0}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex flex-col justify-between">
                                            <h3 className="text-sm text-gray-700">
                                                <a href={`./products/${product._id}`}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.productName}
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">฿{product.idSKU[0]?.price}</p>
                                            <Link href={`./products/${product._id}`} className="absolute bottom-20 right-4 h-10 flex lg text-md font-normal bg-black items-center rounded-sm py-2 px-2.5 hover:bg-gray-700 ">
                                                <ShoppingBagIcon className="h-5 w-5 text-white hover:text-white" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* <div className="p-4 border-green-500 border">
                    <h1 className="text-4xl font-semibold mb-5">Product</h1>
                    <div className="mt-6 flex flex-nowrap gap-10 overflow-hidden overflow-x-auto carousel">
                        <div className="grid grid-cols-4 gap-3 m-auto">
                            {datas.map((product) => (
                                <div className="grid group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full min-w-[18em] min-h-[22em] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                        <Image
                                            src={product.thumbnail}
                                            alt="product Img"
                                            height={0}
                                            width={0}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex flex-col justify-between">
                                        <h3 className="text-sm text-gray-700">
                                            <a href={'/test'}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.productName}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">฿{product.idSKU[0]?.price}</p>
                                        <button className="absolute bottom-20 right-4 h-10 flex lg text-md font-normal bg-black items-center rounded-sm py-2 px-2.5 hover:bg-gray-700 ">
                                            <ShoppingBagIcon className="h-5 w-5 text-white hover:text-white" />
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div> */}
        </div>
    );
}
