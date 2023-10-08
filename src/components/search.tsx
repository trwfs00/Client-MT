import React, { useEffect } from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Inter, Playfair_Display, Noto_Sans_Thai } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({
    subsets: ['latin'],
});

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



export default function search() {
    const [products, setProducts] = useState<Data[]>([]);
    const [open, setOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const cancelButtonRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 5; // Number of results to display per page
    const [filteredProducts, setFilteredProducts] = useState<Data[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/product/');
                const data = await response.json();
                setProducts(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts.
    }, [open]);

    // Update the filtered products whenever search input changes
    useEffect(() => {
        const filtered = products.filter((product) =>
            product.productName.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchInput, products]);

    // Calculate the range of products to display on the current page
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const displayedProducts = filteredProducts.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredProducts.length / resultsPerPage);

    // Function to handle pagination
    const handlePagination = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="flex md:flex lg:flex text-md font-normal leading-6 text-gray-900">
                <MagnifyingGlassIcon className="h-5 w-5 text-[#424242] translate-y-[0.15em]" />
            </button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className={`relative z-50 ${inter.className}`} initialFocus={cancelButtonRef} onClose={() => {
                    setOpen(false);
                    setSearchInput('');
                    setCurrentPage(1);
                    setFilteredProducts([]); // Clear filtered products
                }}>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="w-full mt-3 text-center  sm:mt-0 sm:text-left">
                                                <form className="flex items-center"
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                    }}>
                                                    <label className="sr-only">Search</label>
                                                    <div className="relative w-full">
                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                                                        </div>
                                                        <input
                                                            value={searchInput}
                                                            onChange={(e) => setSearchInput(e.target.value)}
                                                            required
                                                            type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search ..." />
                                                    </div>
                                                    <button type="submit" className="p-3 ml-2 text-sm font-medium text-white bg-[#0f172a] rounded-lg  hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-200 focus:ring-offset-2">
                                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                        </svg>
                                                        <span className="sr-only">Search</span>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className='m-auto flex justify-start mt-6'>
                                            <ul className='w-full'>
                                                {displayedProducts.length > 0 ? (
                                                    displayedProducts.map((product) => (
                                                        <li key={product._id} className='w-full'>
                                                            <Link
                                                                href={`/products/${product._id}`}
                                                                className="w-full font-medium text-gray-900 hover:underline inline-block p-2 px-4 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:scale-105"
                                                            >
                                                                {product?.productName}
                                                            </Link>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <li>
                                                        <p className="text-sm text-gray-500">No results found</p>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row justify-between sm:px-6">
                                        <div className="flex justify-center space-x-4">
                                            {Array.from({ length: totalPages }, (_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handlePagination(i + 1)}
                                                    className={`px-4 py-2 rounded-full hover:bg-gray-200 ${currentPage === i + 1 ? 'bg-gray-300' : ''
                                                        }`}
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                        </div>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm  text-gray-900 shadow-sm   hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Close
                                        </button>
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
