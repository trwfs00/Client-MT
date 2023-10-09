import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../AuthContext';

const products = [
    {
        id: 1,
        size: "52",
        name: 'Belgium cut color 99-98 vvs level',
        href: '#',
        color: 'White Gold',
        price: '฿8769.99',
        quantity: 1,
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    }]

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
}

type SKUData = {
    _id: string,
    size: string,
    sku_id: {
        _id: string,
        Products_idProducts: string,
        color: string,
        goldWight: string,
        price: number,
        cost: number,
        idPictures: {
            path: string
        }[],
        deleted_at: string,
        created_at: string,
        updated_at: string,
    }
}

function fetchSKUData(itemId: string, id: string): Promise<SKUData> {
    if (!itemId) {
        throw new Error('itemId is not provided');
    }
    console.log(itemId)
    console.log(id)
    const url = `http://localhost:8080/sku/usercart/${itemId}/${id}`;

    return fetch(url)
        .then((res) => res.json())
        .catch((error) => {
            console.error(error);
            throw error;
        });
}

function checkout() {

    const { auth, user } = useAuth();
    const router = useRouter();
    const { item } = router.query;
    console.log(item)
    const itemsArray = Array.isArray(item) ? item : [item];
    console.log(itemsArray)
    const [slip, setSlip] = useState('')
    const [message,setMessage] = useState('')


    const userid = user?._id
    console.log(userid)

    const { address } = router.query;
    const [addressData, setAddressData] = useState<Data | null>(null);

    useEffect(() => {
        if (address) {
            try {
                const decodedAddress = JSON.parse(decodeURIComponent(address)) as Data;
                setAddressData(decodedAddress);
            } catch (error) {
                console.error('Error decoding address:', error);
            }
        }
    }, [address]);


    function convertToBase64(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
    
            reader.onloadend = () => {
                const base64String = reader.result as string;
                console.log(base64String); // สามารถใช้ base64String ต่อไปได้ตามต้องการ
                setSlip(base64String);
            };
    
            reader.onerror = (error) => {
                console.log("Error: ", error);
            };
    
            reader.readAsDataURL(file);
        }
    }



    const [SKU, setSKU] = useState<SKUData[]>([]);
    const totalPrice = SKU.reduce((accumulator, sku) => accumulator + sku.sku_id.price, 0);
    // const []

    let isFetching = false;



    useEffect(() => {
        const fetchData = async () => {
            if (!item || isFetching) return;

            isFetching = true;

            const itemsArray = Array.isArray(item) ? item : [item];

            try {
                const requests = itemsArray.flatMap(async (itemIds) => {
                    try {
                        const jsonArray = JSON.parse(itemIds);
                        if (Array.isArray(jsonArray)) {
                            const skuRequests = jsonArray.map(async (formattedValue) => {
                                try {
                                    console.log(userid)
                                    // Make an asynchronous request and return the promise
                                    const skuData = await fetchSKUData(formattedValue, userid);
                                    console.log(skuData); // Output the fetched SKU data
                                    return skuData;
                                } catch (error) {
                                    console.error('Error fetching SKU data:', error);
                                    // Handle the error here or rethrow it if needed
                                    throw error;
                                }
                            });

                            // Use Promise.all to wait for all SKU requests to complete
                            const skuDataArray = await Promise.all(skuRequests);

                            return skuDataArray;
                        } else {
                            console.error('Invalid JSON format.');
                            return [];
                        }
                    } catch (error) {
                        console.error('Error parsing JSON:', error);
                        // Handle the error here or rethrow it if needed
                        throw error;
                    }
                });

                // Use Promise.all to wait for all requests to complete
                const nestedSkuData = await Promise.all(requests);

                // Flatten the nested arrays
                const flatSkuData = nestedSkuData.flat().flat();

                console.log(flatSkuData);

                // Set the SKU data in the state
                setSKU(flatSkuData);

                // Return the flat SKU data
                return flatSkuData;
            } catch (error) {
                console.error('Error processing data:', error);
                // Handle the error here if needed
            } finally {
                isFetching = false;
            }
        };

        fetchData();
    }, [item, userid]);

    const purchase = async (e: any) => {
        e.preventDefault()

        const addressID = addressData?._id
        if (userid && address && totalPrice && slip) {
            try {
                const addOrder = await fetch('http://localhost:8080/order/addOrder/', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ user_id: userid, addressID, total: totalPrice, slip })
                })

                const _addOrder = await addOrder.json()
                const orderID = _addOrder._id
                console.log(orderID)

                await fetch('http://localhost:8080/orderdetail/addOrder/', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ Orders_idOrders: orderID, SKUs: SKU })
                })

                router.push('./success')

            } catch (error) {
                console.log(error)
            }
        }else{
            setMessage('require address and payment')
        }

    }

    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <div className=" py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-2/4 ">
                            <div className="bg-white rounded-lg shadow-md p-6 divide-y divide-gray-200">
                                {/* <h2 className="text-lg font-semibold mb-4">Address</h2> */}
                                <Link href={`/User/Address/Chooseads/${user?._id}`} className='w-full mb-3 '>
                                    <div className="flex mt-3 ">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        </span>
                                        <span>
                                            <h2 className="text-sm font-semibold mb-1 pl-2">Address</h2>
                                        </span>
                                    </div>
                                    <div className="flex justify-between  ml-8 mb " >
                                        {addressData ? (
                                            <div>
                                                <p className="text-sm text-gray-500 truncate text-left">
                                                    {addressData.Contact.fullname}, {addressData.Contact.phonenumber}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate ">
                                                    {addressData.Address.streetname}, {addressData.Address.subdistrict}, {addressData.Address.district}, {addressData.Address.province}, {addressData.Address.postcode}
                                                </p>
                                            </div>
                                        ) : (
                                            <p>No address data available.</p>
                                        )}
                                        <div>
                                            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                        </div>
                                    </div>
                                </Link>
                                <button className='w-full '>
                                    <div className="flex  mt-3">
                                        <span>
                                            <h2 className="text-sm font-semibold mb-1 ">Delivery Option</h2>
                                        </span>
                                    </div>
                                    <div className="flex justify-between mb-3  ml-8">
                                        <div>
                                            <p className="text-sm text-gray-500 truncate text-left">
                                                Standard Delivery
                                            </p>
                                            <p className="text-xs text-gray-500 truncate ">
                                                Ship By:Monday,August 23
                                            </p>
                                        </div>
                                        <div>
                                            <div className="inline-flex items-center text-sm  text-gray-500 dark:text-white">
                                                ฿120.00
                                                <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                            </div>
                                        </div>
                                    </div></button>
                                <button className='w-full '>
                                    <div className="flex justify-between mt-3 mb-3">
                                        <span>
                                            <h2 className="text-sm font-semibold mb-1 ">Notes:</h2>
                                        </span>
                                        <p className="text-xs text-gray-500 truncate ">
                                            Leave a message to the seller.
                                        </p>
                                    </div></button>
                                <button className='w-full '>
                                    <div className="flex  justify-between mt-3 mb-3">
                                        <div className="flex mb-0 ">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                                                </svg>
                                            </span>
                                            <span>
                                                <h2 className="text-sm font-semibold mb-1 pl-2">Coupon & Voucher</h2>
                                            </span>
                                        </div>
                                        <div className="inline-flex items-center text-xs  text-gray-500 dark:text-white">
                                            Apply Code
                                            <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                        </div>
                                    </div></button>
                                {/* <button className='w-full'>
                                    <div className="flex justify-between mt-3 mb-3">
                                        <div className="flex mb-0 ">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>

                                            </span>
                                            <span>
                                                <h2 className="text-sm font-semibold mb-1 pl-2">Pay methods</h2>
                                            </span>
                                        </div>
                                        <div className="inline-flex items-center text-xs  text-gray-500 dark:text-white">
                                                <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                        </div>
                                    </div></button> */}
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="default_size">Payment</label>
                                <input
                                    accept='image/*'
                                    onChange={convertToBase64}
                                    className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file" />
                            </div>
                        </div>

                        {/*  */}
                        <div className="md:w-2/4 h-full">
                            <div className="bg-white rounded-lg shadow-md p-6  h-full">
                                <div className="flow-root ">
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {SKU?.length > 0 ? (
                                            SKU.map((skus) => (
                                                <li className="">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <img className="w-20 h-auto "
                                                                src={skus.sku_id.idPictures[0]?.path}
                                                                alt="Neil image"></img>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                {skus.sku_id._id}
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                Size : {skus.size} <br />
                                                                Color : {skus.sku_id.color} <br />
                                                                x1
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                            ฿{skus.sku_id.price}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <p>No Order</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                    <div className="flex justify-between mt-3 text-sm text-gray-500 ">
                                        <span>Order Totals</span>
                                        <span>฿{totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between  mt-1 text-sm text-gray-500" >
                                        <span>Delivery fees</span>
                                        <span>฿120.00</span>
                                    </div>
                                    <div className="my-2">
                                        <div className="flex justify-between  mt-1 text-[#1F304A]">
                                            <span className="font-semibold">Total</span>
                                            <span className="font-semibold">฿{totalPrice}</span>
                                        </div>
                                    </div>
                                    {message ? <p className='text-red-500'>{message}</p> : null }
                                    <button
                                        onClick={purchase}
                                        type="button" className="w-full px-5 py-2.5 text-sm font-medium text-white bg-[#0F172A] hover:bg-gray-800 focus:outline-none  rounded-lg text-center mt-4">Purchases</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default checkout