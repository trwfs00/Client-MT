import React, { useState } from 'react'
import router from 'next/router'
import { convertToObject } from 'typescript'

type Props = {
    datas: [Data]
}

type Data = {
    type: string,
    productName: string,
    productDesc: string,
    thumbnail: string
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

    const [product, setProducts] = useState<[Data]>(props.datas)
    const [type, setType] = useState('')
    const [productName, setProductName] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    function convertToBase64(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
    
            reader.onloadend = () => {
                const base64String = reader.result as string;
                console.log(base64String); // สามารถใช้ base64String ต่อไปได้ตามต้องการ
                setThumbnail(base64String);
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
        if (type && productName && productDesc && thumbnail) {
            console.log(JSON.stringify({ type, productName, productDesc, thumbnail }))
            try {

                let response = await fetch('http://localhost:8080/product/addPro', {
                    method: "Post",
                    body: JSON.stringify({
                        type, productName, productDesc, base64:thumbnail
                    }),
                    headers: {
                        Accept: "application/json , text/plain, */*",
                        "Content-Type": "application/json"
                    }
                })

                if (response.ok) {
                    const data = await response.json();
                    setType("")
                    setProductName("")
                    setProductDesc("")
                    setThumbnail("")
                    setError("")
                    setMessage("Post added successfully!!")
                    router.push('/Product');
                    console.log(data);
                    // Rest of your code
                } else {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

            } catch (error: any) {
                setError(error)
                console.log(error)
            }
        } else {
            return setError("error")
        }

    }
    return (
        <div className='bg-gray-800 h-screen'>
            <div className='max-w-6xl m-auto mt-10'>
                <h1 className='text-4xl font-bold text-white mb-10'>Add Product form</h1>
                <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                type
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" 
                                onChange={(e) => setType(e.target.value)}
                                value={type}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                ProductName
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" 
                                onChange={(e) => setProductName(e.target.value)}
                                value={productName}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                ProductDesc
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" 
                                onChange={(e) => setProductDesc(e.target.value)}
                                value={productDesc}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                thumbnail
                            </label>
                            <input
                                accept='image/*'
                                onChange={convertToBase64}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='file' />
                                {thumbnail ? <img width={100} height={100} src={thumbnail}/> : null}                           
                           </div>
                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                                ㅤ
                            </label>
                            <button type="submit" className="w-full py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-m  dark:focus:ring-offset-gray-800">
                                Submit
                            </button>
                        </div>
                        {message ? <div className="text-green-500">{message}</div> : null}
                        {error ? <div className="text-red-500">{error}</div> : null}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default image