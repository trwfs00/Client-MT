import React, { useState } from 'react'
import router, { useRouter } from 'next/router'
import { convertToObject } from 'typescript'
import Image from 'next/image'
import Ring from "@/images/ring.svg"
import { ShoppingBagIcon, ShoppingCartIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useAuth } from '../../../AuthContext';


type Props = {
    datas: [Data]
}

type Data = {
    _id: string,
    Products_idProducts: string,
    color: string,
    goldWight: string,
    price: number,
    cost: number,
    idPictures: {
        path: string;
    }[],
    deleted_at: string
}

export const getServerSideProps = async () => {
    try {
        let response = await fetch('http://localhost:8080/product')
        let datas = await response.json()
        const test = 'test'
        return {
            props: { datas: JSON.parse(JSON.stringify(datas)) }
        }
    } catch (error) {
        console.error(error)
        return {
            props: { datas: [] },
        }
    }
}

function image(props: Props) {

    const { auth, user } = useAuth();
    console.log(user)

    const router = useRouter();
    const { id } = router.query;

    const [product, setProducts] = useState<[Data]>(props.datas)
    const [Products_idProducts, setProducts_idProducts] = useState<string | null>(id as string | null);
    const [color, setColor] = useState('')
    const [goldWight, setGoldWight] = useState('')
    const [price, setPrice] = useState('')
    const [cost, setCost] = useState('')
    const [idPictures, setIdPictures] = useState<{ path: string }[]>([]);
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')


    function convertToBase64(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result as string;
                console.log(base64String);

                // Append _id and path to the idPictures array
                setIdPictures((prevIdPictures) => [
                    ...prevIdPictures,
                    { path: base64String },
                ]);
            };

            reader.onerror = (error) => {
                console.log("Error: ", error);
            };

            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        // console.log(adviser)
        if (Products_idProducts && color && goldWight && price && cost && idPictures.length > 0) {
            console.log(JSON.stringify({ Products_idProducts, color, goldWight, price, cost, idPictures }))
            try {
                let response = await fetch('http://localhost:8080/sku/addSKUs', {
                    method: "Post",
                    body: JSON.stringify({
                        Products_idProducts, color, goldWight, price, cost, base64: idPictures
                    }),
                    headers: {
                        Accept: "application/json , text/plain, */*",
                        "Content-Type": "application/json"
                    }
                })

                if (response.ok) {
                    const data = await response.json();
                    setProducts_idProducts("");
                    setColor("");
                    setGoldWight("");
                    setPrice("");
                    setCost("");
                    setIdPictures([]);
                    setError("");
                    setMessage("Post added successfully!!");
                    router.push(`/Product/Productdetail/${Products_idProducts}`);
                } else {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
            } catch (error: any) {
                setError(error.message);
                console.error(error);
            }
        } else {
            setError('Please fill in all required fields and select at least one image.');
        }
    };

    return (
        // <div className='bg-gray-800 h-screen'>
        //     <div className='max-w-6xl m-auto mt-10'>
        //         <h1 className='text-4xl font-bold text-white mb-10'>Add SKUs form</h1>
        //         <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
        //             <div className="flex flex-wrap -mx-3 mb-6">
        //                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        //                     <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
        //                         Color
        //                     </label>
        //                     <input
        //                         className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"
        //                         onChange={(e) => setColor(e.target.value)}
        //                         value={color}
        //                     />
        //                 </div>
        //                 <div className="w-full md:w-1/2 px-3">
        //                     <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
        //                         GoldWight
        //                     </label>
        //                     <input
        //                         className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"
        //                         onChange={(e) => setGoldWight(e.target.value)}
        //                         value={goldWight}
        //                     />
        //                 </div>
        //             </div>
        //             <div className="flex flex-wrap -mx-3 mb-6">
        //                 <div className="w-full md:w-1/2 px-3">
        //                     <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
        //                         Price
        //                     </label>
        //                     <input
        //                         className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number"
        //                         onChange={(e) => setPrice(e.target.value)}
        //                         value={price}
        //                     />
        //                 </div>
        //                 <div className="w-full md:w-1/2 px-3">
        //                     <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
        //                         Cost
        //                     </label>
        //                     <input
        //                         className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number"
        //                         onChange={(e) => setCost(e.target.value)}
        //                         value={cost}
        //                     />
        //                 </div>
        //                 <div className="w-full md:w-1/2 px-3">
        //                     <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
        //                         Images
        //                     </label>
        //                     <input
        //                         accept="image/*" // Specify the accepted file types (images in this case)
        //                         multiple // Allow multiple file selection
        //                         onChange={convertToBase64}
        //                         className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        //                         type="file"
        //                     />
        // {idPictures && idPictures.length > 0 ? (
        //     <div className="flex flex-wrap gap-2">
        //         {idPictures.map((image, index) => (
        //             <img
        //                 key={index}
        //                 width={100}
        //                 height={100}
        //                 src={image.path} // Access the 'path' property
        //                 alt={`Image ${index}`}
        //             />
        //         ))}
        //     </div>
        // ) : null}


        //                 </div>
        //                 <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        //                     <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
        //                         ㅤ
        //                     </label>
        //                     <button type="submit" className="w-full py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-m  dark:focus:ring-offset-gray-800">
        //                         Submit
        //                     </button>
        //                 </div>
        //                 {message ? <div className="text-green-500">{message}</div> : null}
        //                 {error ? <div className="text-red-500">{error}</div> : null}
        //             </div>
        //         </form>
        //     </div>
        // </div>

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
                {/* Page content here */}
                <h1 className='text-xl font-bold mt-10 ml-10'>Add SKUs</h1>
                <form onSubmit={handleSubmit}>
                    <div className='contrainer mx-10 my-2'>
                        <div className="grid grid-cols-2 gap-4 bg-white sm:rounded-lg mt-5 shadow">
                            <div className='m-5 '>
                                <div className='flex  justify-center items-center mt-5'>
                                    <div className='border w-1/3 bg-gray-200' >
                                        <div >
                                            {idPictures && idPictures.length > 0 ? (
                                                <>
                                                    {idPictures.map((image, index) => (
                                                        <div key={index} style={{ width: '200px', height: '150px', overflow: 'hidden' }}>
                                                            <Image
                                                                src={image.path}
                                                                alt="Logo"
                                                                width={200} // Set the width explicitly
                                                                height={150} // Set the height explicitly
                                                                style={{ objectFit: 'fill' }} // Adjust object-fit if needed
                                                            />
                                                        </div>
                                                    ))}
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center my-5'>
                                    <div className="form-control w-full max-w-xs ">
                                        <label className="label">
                                            <span className="label-text">Pick a file</span>

                                        </label>
                                        <input type="file" className="file-input file-input-bordered w-full max-w-xs"
                                            accept='image/*'
                                            onChange={convertToBase64}
                                            multiple />
                                    </div>
                                </div>
                            </div>
                            <div className=' p-5 mt-5'>
                                <div className="form-control w-full max-w-xs  ">
                                    <label className="label">
                                        <span className="label-text font-medium ">Colors</span>
                                    </label>
                                    <select className="select select-bordered border-gray-800"
                                        onChange={(e) => setColor(e.target.value)}
                                        value={color}>
                                        <option value={"White Gold"} selected> White gold </option>
                                        <option value={"Rose Gold"} > Rose Gold </option>
                                        <option value={"Gold"} > Gold</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text font-medium ">Glodwight</span>
                                    </label>
                                    <input type="text" placeholder="Glodwight" className="input border-gray-800  w-full max-w-xs "
                                        onChange={(e) => setGoldWight(e.target.value)}
                                        value={goldWight} />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text font-medium ">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" className="input border-gray-800  w-full max-w-xs "
                                        onChange={(e) => setPrice(e.target.value)}
                                        value={price} />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text font-medium ">Cost</span>
                                    </label>
                                    <input type="text" placeholder="Cost" className="input border-gray-800  w-full max-w-xs "
                                        onChange={(e) => setCost(e.target.value)}
                                        value={cost} />
                                </div>
                            </div>
                            <div className='col-span-2 flex justify-center items-center mb-10 '>
                                <button type='submit' className="btn btn-neutral text-white">Add SKUs</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                        <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <ShoppingCartIcon className="h-6 w-6 text-gray-500 " />
                            <span className="flex-1 ml-3 text-left whitespace-nowrap"> Product</span>
                        </button>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group">
                            <UsersIcon className="h-6 w-6 text-gray-500" />
                            <span className="flex-1 ml-3 whitespace-nowrap">User</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">
                            <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
                            <span className="flex-1 ml-3 whitespace-nowrap">purchase order</span>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )

}

export default image