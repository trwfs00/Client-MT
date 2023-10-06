import Link from "next/link";
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'

type PageParams = {
    id: string
}

type ContentPageProps = {
    data: Data;
};

type Data = {
    _id: string,
    type: string,
    productName: string,
    productDesc: string,
    thumbnail: string,
    idSKU: Array<{
        _idSKU: string,
        price: string,
    }>,
};

type ResponeFromServer = {
    _id: string,
    type: string,
    productName: string,
    productDesc: string,
    thumbnail: string,
    idSKU: Array<{
        _idSKU: string,
        price: string,
    }>,
};

const product = {
    name: 'Basic Tee 6-Pack',
    price: '฿192',
    href: '#',
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-[#FFC700]', selectedClass: 'ring-[#cc9f00]' },
        { name: 'Gray', class: 'bg-[#FFFFFA]', selectedClass: 'ring-[#ccccc8]' },
        { name: 'Black', class: 'bg-[#F1A886]', selectedClass: 'ring-[#c1866b]' },
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        // { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export async function getServerSideProps({ params }
    : GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<ContentPageProps>> {
    try {
        let proRes = await fetch('http://localhost:8080/product/onePro/' + params?.id)
        let skuRes = await fetch('http://localhost:8080/product/onePro/' + params?.id)
        let responeFromServer: ResponeFromServer = await proRes.json()
        // let responeFromServer: ResponeFromServer = await proRes.json()
        console.log(responeFromServer)

        return {
            props: {
                data: {
                    _id: responeFromServer._id,
                    type: responeFromServer.type,
                    productName: responeFromServer.productName,
                    productDesc: responeFromServer.productDesc,
                    thumbnail: responeFromServer.thumbnail,
                    idSKU: responeFromServer.idSKU,
                    // idSKU: responeFromServer.idSKU.map((sku:any) => ([{
                    //     _idSKU: sku._id, // Assuming _idSKU is extracted from the idSKU objects
                    //     price: sku.price,
                    // }])),
                },
            },
        }
    } catch (error) {
        console.error(error)
        return {
            props: {
                data: {
                    _id: "",
                    type: "",
                    productName: "",
                    productDesc: "",
                    thumbnail: "",
                    idSKU: [],
                    // idSKU: [{
                    //     _idSKU: "",
                    //     price: ""
                    // }]
                }
            }
        }
    }
}

export default function productDetail({ data: { _id, type, productName, productDesc, thumbnail, idSKU } }: ContentPageProps) {

    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[1])

    const [_productName, setProductName] = useState(productName)

    console.log(idSKU[0].price)
    return (
        <section className="bg-white ">
            <div className="mx-auto max-w-7xl p-4 bg-white">
                <nav className="flex px-5 py-3 text-gray-700" aria-label="Breadcrumb">
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
                <div className="flex flex-col md:flex-row flex-wrap justify-between py-5">
                    <div className="flex-1 grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 py-10 md:py-0 md:px-10 font-mtsans">
                        <h1 className="font-semibold text-4xl md:text-6xl font-mtserif text-gray-900">Eternal Elegance Necklaces</h1>
                        <p className="mt-6 text-md">
                            Elevate your style and embrace timeless beauty with our "Eternal Elegance" Diamond Pendant Necklace. Crafted with precision and adorned with radiant diamonds, this stunning piece of jewelry is designed to captivate hearts and leave a lasting impression.
                        </p>
                        <h2 className="font-bold font-mtthai text-3xl my-10 text-[#0F172A]">
                            ฿4,999.49
                        </h2>
                        <h3 className="font-medium text-lg mt-10 mb-4 text-[#0F172A]">Select Size</h3>
                        <div className="flex flex-wrap">
                            <button className="p-3 px-4 border text-xl rounded-xl checked:bg-[#0F172A]">49</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
