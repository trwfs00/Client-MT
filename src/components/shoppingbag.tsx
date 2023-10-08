import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ClockIcon, MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Inter } from 'next/font/google'
import { select } from '@material-tailwind/react'
import { useAuth } from '../../pages/AuthContext';
import Link from 'next/link'


const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    variable: '--font-inter'
})

type Props = {
    datas: Data[];
}

type Data = {
    _id: string,
    Users_idUsers: string,
    SKUs: {
        _id: string,
        qty: number,
        size: number
    }[],
}

export const getServerSideProps = async () => {

    const { auth, user } = useAuth();
    const userID = user?._id

    try {
        const response = await fetch(`http://localhost:8080/cart/usercart?Users_idUsers=${userID}`);
        const datas = await response.json();
        console.log(datas)
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


function getRandomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// interface Product {
//     id: string;
//     name: string;
//     href: string;
//     color: string;
//     price: string;
//     quantity: number;
//     imageSrc: string;
//     imageAlt: string;
//     createdAt: string;
// }

// const products: Product[] = [
//     {
//         id: '1',
//         name: 'Throwback Hip Bag',
//         href: '#',
//         color: 'Salmon',
//         price: '$90.00',
//         quantity: 1,
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//         imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//         createdAt: getRandomDate(new Date(2020, 0, 1), new Date()).toISOString(),
//     },
//     {
//         id:' 2',
//         name: 'Medium Stuff Satchel',
//         href: '#',
//         color: 'Blue',
//         price: '$32.00',
//         quantity: 1,
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//         imageAlt:
//             'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//         createdAt: getRandomDate(new Date(2020, 0, 1), new Date()).toISOString(),
//     },
//     {
//         id: '3',
//         name: 'Medium Stuff Satchel #2',
//         href: '#',
//         color: 'Blue',
//         price: '$32.00',
//         quantity: 1,
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//         imageAlt:
//             'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//         createdAt: getRandomDate(new Date(2020, 0, 1), new Date()).toISOString(),
//     },
//     {
//         id: '4',
//         name: 'Medium Stuff Satchel #3',
//         href: '#',
//         color: 'Blue',
//         price: '$32.00',
//         quantity: 1,
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//         imageAlt:
//             'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//         createdAt: getRandomDate(new Date(2020, 0, 1), new Date()).toISOString(),
//     },
//     // More products...
// ];

const productDefaults = [{
    _id: {
        $oid: "6521bf11ca2744b2c3c4b4ae"
    },
    Users_idUsers: {
        $oid: "65214eb2eeac82f956d966a6"
    },
    SKUs: [
        {
            SKUs_idSKUs: {
                $oid: "6516b20babd5fbb4a17d75c8"
            },
            size: "52",
            qty: 1,
            _id: {
                $oid: "6521bf57ca2744b2c3c4b4b1"
            },
            created_at: {
                $date: "2023-10-07T20:28:07.884Z"
            },
            updated_at: {
                $date: "2023-10-07T20:28:07.884Z"
            }
        },
        {
            SKUs_idSKUs: {
                $oid: "6516ef47b3ea898c9b525dba"
            },
            size: "51",
            qty: 1,
            _id: {
                $oid: "6521bf74ca2744b2c3c4b4b5"
            },
            created_at: {
                $date: "2023-10-07T20:28:36.779Z"
            },
            updated_at: {
                $date: "2023-10-07T20:28:36.779Z"
            }
        }
    ],
    __v: 2
}]

export default function Example(props: any) {
    const products = props.shoppingCart || productDefaults
    const [open, setOpen] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [selectedObject, setSelectedObject] = useState<object[]>([]);
    // const [products,setProducts] = useState(products)
    useEffect(() => {
        console.log(props.shoppingCart?.SKUs);
        console.log(props.shoppingCart?.SKUs[0]?.SKUs_idSKUs);
        //console.log(products[0].Users_idUsers || 'ควย')
        //console.log(products[0].SKUs[0].SKUs_idSKUs.Products_idProducts.productName || 'ควย')
    }, [open])

    const [totalPrice, setTotalPrice] = useState(0);

    const toggleProductSelection = (productId: string, price: number) => {
        setSelectedProducts((prevSelectedProducts) => {
            if (prevSelectedProducts.includes(productId)) {
                // If the product is already selected, remove it from the selectedProducts array
                setTotalPrice(totalPrice - price);
                return prevSelectedProducts.filter((id) => id !== productId);
            } else {
                // If the product is not selected, add it to the selectedProducts array
                setTotalPrice(totalPrice + price);
                return [...prevSelectedProducts, productId];
            }
        });
        console.log(selectedProducts);
    };

    const handleCheckout = () => {
        if (selectedProducts.length === 0) {
            // Don't proceed with checkout if nothing is selected
            return;
        }

        // Perform the checkout logic here
        // You can use the selectedProducts array for further processing
    };

    function formatAsCurrency(number: any) {
        if (typeof number !== 'number') {
            throw new Error('Input must be a number');
        }

        // Use toLocaleString to format the number with commas and no decimal places
        return number.toLocaleString('th-TH', {
            style: 'currency',
            currency: 'THB',
            maximumFractionDigits: 0 // Set this to 0 to remove decimal places
        });
    }

    function timestampToShortAgo(timestamp: string): string {
        const now = new Date();
        const date = new Date(timestamp);
        const timeDifference = now.getTime() - date.getTime();

        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) {
            return `${years}y. ago`;
        } else if (months > 0) {
            return `${months}m. ago`;
        } else if (days > 0) {
            return `${days}d. ago`;
        } else if (hours > 0) {
            return `${hours}h. ago`;
        } else if (minutes > 0) {
            return `${minutes}m. ago`;
        } else {
            return `${seconds}s. ago`;
        }
    }

    //Check if all products are selected or deselected
    const isAllProductsSelected = selectedProducts.length === products?.SKUs?.length
    const isNoProductSelected = selectedProducts.length === 0

    const toggleSelectAllProducts = () => {
        if (isAllProductsSelected || isNoProductSelected) {
            // If all products are selected or none are selected, toggle them all
            setSelectedProducts(isAllProductsSelected ? [] : products.SKUs.map((product: any) => product.SKUs_idSKUs._id))
        } else {
            // If some but not all products are selected, select all
            setSelectedProducts(products.SKUs.map((product: any) => product.SKUs_idSKUs._id))
        }
    }


    useEffect(() => {
        console.log(selectedProducts);
    }, [selectedProducts])

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
                                                <div className="flex items-start justify-between sticky top-0 bg-white z-50 pb-4 pt-6 -translate-y-6">
                                                    <div className='flex flex-row flex-wrap gap-4'>
                                                        <input
                                                            name="selectItems"
                                                            type="checkbox"
                                                            className="h-4 w-4 mt-1.5 ml-3 rounded border-gray-300 text-gray-700 focus:ring-gray-900"
                                                            checked={isAllProductsSelected}
                                                            onChange={toggleSelectAllProducts}
                                                        />
                                                        <Dialog.Title className="text-xl font-semibold text-gray-900">Shopping bag ({selectedProducts.length})</Dialog.Title>
                                                    </div>
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

                                                <div className="mt-4">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {products.SKUs && products.SKUs.map((product: any) => (
                                                                <li key={product.SKUs_idSKUs._id} className="flex py-6">
                                                                    <div className="flex items-center mx-3">
                                                                        <input
                                                                            name="selectItems"
                                                                            type="checkbox"
                                                                            className="h-4 w-4 rounded border-gray-300 text-gray-700 focus:ring-gray-900"
                                                                            checked={selectedProducts.includes(product.SKUs_idSKUs._id)}
                                                                            onChange={() => {
                                                                                toggleProductSelection(product.SKUs_idSKUs._id, product.SKUs_idSKUs.price * product.qty)
                                                                                //add function that toggle collect product.SKUs_idSKUs into selectedObject using useState like toggleProductSelection
                                                                            }}
                                                                        />
                                                                    </div>

                                                                    <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={product.SKUs_idSKUs.idPictures[0].path}
                                                                            alt={product.SKUs_idSKUs.Products_idProducts.productName}
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <div className="flex flex-col">
                                                                                    <div className='flex flex-row mb-1'>
                                                                                        <ClockIcon className="h-4 w-4 text-gray-500" />
                                                                                        <p className='ml-1 text-xs text-gray-400 font-normal'>{timestampToShortAgo(product.SKUs_idSKUs.created_at)}</p>
                                                                                    </div>
                                                                                    <h3>
                                                                                        <Link href={`/product/${product.SKUs_idSKUs.Products_idProducts._id}`}>{product.SKUs_idSKUs.Products_idProducts.productName}</Link>
                                                                                    </h3>
                                                                                </div>
                                                                            </div>
                                                                            <div className='flex flex-row gap-8'>
                                                                                <span>
                                                                                    <p className="mt-1 text-sm text-gray-500 inline">Size: </p>
                                                                                    <p className="mt-1 text-sm text-gray-700 inline">{product.size}cm</p>
                                                                                </span>
                                                                                <span>
                                                                                    <p className="mt-1 text-sm text-gray-500 inline">Color: </p>
                                                                                    <p className="mt-1 text-sm text-gray-700 inline">{product.SKUs_idSKUs.color}</p>
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
                                                                                    //make this onClick do function that decrease product.quantity -1
                                                                                    >
                                                                                        <MinusIcon className="h-4 w-4 text-g[#424242]" />
                                                                                    </button>
                                                                                    <p className='text-md font-semibold mx-7'>
                                                                                        {product.qty}
                                                                                    </p>
                                                                                    <button
                                                                                        type="button"
                                                                                    //make this onClick do function that increase product.quantity +1
                                                                                    >
                                                                                        <PlusIcon className="h-4 w-4 text-g[#424242]" />
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                            <p className="text-gray-800 text-xl font-semibold mt-2">{formatAsCurrency(product.SKUs_idSKUs.price * product.qty)}</p>
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
                                                    <p>{formatAsCurrency(totalPrice)}</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6">
                                                    <a
                                                        href={`/checkout?item=${JSON.stringify(selectedProducts)}`}
                                                        className={`flex items-center justify-center rounded-md border border-transparent bg-[#0F172A] px-6 py-3 text-base font-medium text-white shadow-sm ${selectedProducts.length === 0 ? 'opacity-90 cursor-not-allowed' : 'hover:bg-[#161F34] transition-all duration-200 hover:scale-105'}`}
                                                        onClick={handleCheckout}
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
