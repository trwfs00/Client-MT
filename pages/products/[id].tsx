import Link from "next/link";
import { useEffect, useState } from 'react'
import { PlusIcon, StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { MinusIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import router from "next/router";
import { useAuth } from '../AuthContext';
import { type } from "os";

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
        _id: string,
        price: number,
        color: string,
        goldWight: string,
        idPictures: Array<{
            path: string
        }>;
    }>,
};

type ResponeFromServer = {
    _id: string,
    type: string,
    productName: string,
    productDesc: string,
    thumbnail: string,
    idSKU: Array<{
        _id: string,
        price: number,
        color: string,
        goldWight: string,
        idPictures: Array<{
            path: string
        }>;
    }>,
};
type SkuType = {
    _id: string;
    price: number;
    color: string;
    goldWight: string;
    idPictures: Array<{
        path: string
    }>;
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

export async function getServerSideProps({ params }
    : GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<ContentPageProps>> {
    try {
        let proRes = await fetch('http://localhost:8080/product/onePro/' + params?.id)
        // let skuRes = await fetch('http://localhost:8080/product/onePro/' + params?.id)
        let responeFromServer: ResponeFromServer = await proRes.json()
        // let responeFromServer: ResponeFromServer = await proRes.json()
        // console.log(responeFromServer)

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

    const [selectedColor, setSelectedColor] = useState<SkuType>();
    const [selectedSize, setSelectedSize] = useState(1);
    const [selectedQty, setSelectedQty] = useState(1);
    const [otherSize, setOtherSize] = useState(55);
    const [openInputOtherSize, setOpenInputOtherSize] = useState(false);

    const [_productName, setProductName] = useState(productName)
    const [selectedSku, setSelectedSku] = useState(idSKU[0]);

    const { auth, user } = useAuth();
    const uid = user?._id
    const handleSkuSelection = (sku: SkuType) => {
        setSelectedSku(sku);
    };


    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

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

    const decreaseQty = () => {
        if (selectedQty > 1) {
            setSelectedQty(selectedQty - 1)
        }
    }

    useEffect(() => {
        // console.log(selectedSize)
    }, [selectedSize])

    useEffect(() => {
        // console.log(idSKU)
        // console.log('test', selectedColor)
        // console.log('test',selectedColor.idPictures[0].path)
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        // console.log(adviser)
        if (uid && selectedColor?._id  && selectedSize && selectedQty) {
            try {
                const response = await fetch('http://localhost:8080/cart/add-to-cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId:uid,
                        skuId:selectedColor?._id,
                        size:selectedSize,
                        qty:selectedQty,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    router.push('/products');
                    console.log(uid);
                    console.log(selectedColor?._id);
                    console.log(selectedSize);
                    console.log(selectedQty);
                    console.log(data.message); // คำตอบจากเซิร์ฟเวอร์
                } else {
                    console.error('มีข้อผิดพลาดในการเรียกใช้ API');
                }
            } catch (error) {
                console.error('มีข้อผิดพลาดในการเรียกใช้ API:', error);
            }
        }

    }

    // console.log(idSKU[0].price)
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
                                    {productName}
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="flex flex-col md:flex-row flex-wrap justify-between py-5">
                    <div className="flex-1 grid gap-4 w-full">
                        <div>
                            <img className="h-full max-w-full rounded-lg object-cover" src={selectedColor ? selectedColor.idPictures[0].path : thumbnail} alt='' />
                        </div>
                        <div className="grid grid-cols-3 gap-4">

                            {/* <div>
                                <img className="h-auto max-w-full rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                            </div> */}
                        </div>
                    </div>
                    <div className="flex-1 py-10 md:py-0 md:px-10 font-mtsans w-full">
                        <h1 className="font-semibold text-4xl md:text-6xl  mt-6 md:mt-0 font-mtserif text-gray-900">{productName}</h1>
                        <p className="mt-6 text-md">
                            {productDesc}                        </p>
                        <div className="flex justify-between items-center mt-10">
                            <h2 className="font-bold font-mtthai text-3xl text-[#0F172A]">
                                {formatAsCurrency(selectedSku.price * selectedQty)}
                            </h2>
                            <div className="flex border rounded-md py-3 px-2">
                                <button
                                    type="button"
                                    onClick={decreaseQty}
                                >
                                    <MinusIcon className="h-4 w-4 text-g[#424242]" />
                                </button>
                                <input type="number"
                                    value={selectedQty}
                                    readOnly
                                    className='text-md font-semibold mx-7 text-center max-w-[5em]' />
                                <button
                                    type="button"
                                    onClick={() => setSelectedQty(selectedQty + 1)}
                                >
                                    <PlusIcon className="h-4 w-4 text-g[#424242]" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap gap-2 w-full">
                            <div className="flex-1">
                                <h3 className="font-medium text-lg mt-10 mb-4 text-[#0F172A]">Select Size</h3>
                                <ul className="flex flex-row flex-wrap gap-x-2 gap-y-2">
                                    <li>
                                        <input type="radio" id="size48" name="selectedSize" value={48} className="hidden peer" required onChange={(e) => setSelectedSize(e.target.value)} />
                                        <label htmlFor="size48" className="inline-flex items-center justify-center px-4 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-gray-100 peer-checked:bg-[#111827] peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                                            <div className="w-full text-lg font-semibold">48</div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="size49" name="selectedSize" value={49} className="hidden peer" required onChange={(e) => setSelectedSize(e.target.value)} />
                                        <label htmlFor="size49" className="inline-flex items-center justify-center px-4 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-gray-100 peer-checked:bg-[#111827] peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                                            <div className="w-full text-lg font-semibold">49</div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="size50" name="selectedSize" value={50} className="hidden peer" required onChange={(e) => setSelectedSize(e.target.value)} />
                                        <label htmlFor="size50" className="inline-flex items-center justify-center px-4 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-gray-100 peer-checked:bg-[#111827] peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                                            <div className="w-full text-lg font-semibold">50</div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="size51" name="selectedSize" value={51} className="hidden peer" required onChange={(e) => setSelectedSize(e.target.value)} />
                                        <label htmlFor="size51" className="inline-flex items-center justify-center px-4 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-gray-100 peer-checked:bg-[#111827] peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                                            <div className="w-full text-lg font-semibold">51</div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="size52" name="selectedSize" value={52} className="hidden peer" required onChange={(e) => setSelectedSize(e.target.value)} />
                                        <label htmlFor="size52" className="inline-flex items-center justify-center px-4 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-gray-100 peer-checked:bg-[#111827] peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                                            <div className="w-full text-lg font-semibold">52</div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="size53" name="selectedSize" value={53} className="hidden peer" required onChange={(e) => setSelectedSize(e.target.value)} />
                                        <label htmlFor="size53" className="inline-flex items-center justify-center px-4 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-gray-100 peer-checked:bg-[#111827] peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                                            <div className="w-full text-lg font-semibold">53</div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="size54" name="selectedSize" value={54} className="hidden peer" required onChange={(e) => setSelectedSize(e.target.value)} />
                                        <label htmlFor="size54" className="inline-flex items-center justify-center px-4 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-gray-100 peer-checked:bg-[#111827] peer-checked:text-white hover:text-gray-600 hover:bg-gray-100">
                                            <div className="w-full text-lg font-semibold">54</div>
                                        </label>
                                    </li>
                                    <li className="flex gap-4 lg:block">
                                        <input type="radio" id="sizeOther" name="selectedSize" value={otherSize} className="hidden peer" onChange={() => setOpenInputOtherSize(true)} onClick={() => setOpenInputOtherSize(!openInputOtherSize)} />
                                        <label htmlFor="sizeOther" className={`inline-flex items-center justify-center px-3.5 ${otherSize >= 55 ? 'py-3' : 'py-3.5'} text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-gray-100 peer-checked:bg-[#111827] peer-checked:text-white hover:text-gray-600 hover:bg-gray-100`}>
                                            <div className="w-full text-lg font-semibold">{otherSize ? `${otherSize} (+)` : <PlusIcon className="h-6 w-6" />}</div>
                                        </label>
                                        {openInputOtherSize &&
                                            <div className="bg-white lg:pt-2 lg:pb-4 lg:px-8 lg:rounded-xl lg:shadow lg:border lg:absolute lg:-translate-y-[8em] lg:-translate-x-5">
                                                <input type="number" name="otherSize" id="otherSize"
                                                    className="block py-3.5 px-0 font-light text-md text-center text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-700 dark:border-gray-400 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
                                                    placeholder=" "
                                                    min={55}
                                                    max={80}
                                                    defaultValue={55}
                                                    value={otherSize}
                                                    onChange={(e) => {
                                                        if (e.target.valueAsNumber > 80) {
                                                            e.target.valueAsNumber = 80
                                                        } else if (e.target.valueAsNumber < 55) {
                                                            e.target.valueAsNumber = 55
                                                        }
                                                        setOtherSize(e.target.valueAsNumber);
                                                        setSelectedSize(e.target.valueAsNumber);
                                                    }}
                                                    onBlur={() => setOpenInputOtherSize(false)}
                                                    required
                                                />
                                                <label htmlFor="otherSize" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Other Size</label>
                                            </div>
                                        }
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-lg mt-10 mb-4 text-[#0F172A]">Select Material</h3>
                                <div className="flex justify-between w-3/4">
                                    {/* <ul className="flex flex-row gap-4"> */}
                                    {/* ไม่สมประกอบ */}

                                    <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2">
                                        {idSKU.map((sku) => (
                                            <li key={sku._id}>
                                                {/* เปลี่ยน name เป็น _idSKU */}
                                                <input
                                                    type="radio"
                                                    id={sku._id}
                                                    name='selectedColor'
                                                    value={sku._id}
                                                    className="hidden peer"
                                                    // checked={sku._idSKU === selectedColor}
                                                    // defaultChecked={sku._idSKU === selectedSku._idSKU}
                                                    onChange={(e) => {
                                                        setSelectedColor(sku)
                                                        console.log(sku)
                                                        console.log(e.target.value)
                                                    }}
                                                    required
                                                />
                                                <label
                                                    htmlFor={sku._id}
                                                    className={`
    inline-flex items-center justify-center px-4 py-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer
    ${sku.color === 'Gold' ? 'text-[#FFB000] bg-white border border-[#FFB000] rounded-full cursor-pointer peer-checked:border-gray-100 peer-checked:ring-2 peer-checked:ring-[#FFB000] peer-checked:bg-[#FFB000] peer-checked:ring-offset-2 peer-checked:text-white hover:text-white hover:bg-[#FFB000]' : ''}
    ${sku.color === 'Rose Gold' ? 'text-[#f1a886] bg-white border border-[#f1a886] rounded-full cursor-pointer peer-checked:border-gray-100 peer-checked:ring-2 peer-checked:ring-[#f1a886] peer-checked:bg-[#f1a886] peer-checked:ring-offset-2 peer-checked:text-white hover:text-white hover:bg-[#f1a886]' : ''}
    peer-checked:border-gray-100 peer-checked:bg-[#111827] peer-checked:text-white hover:text-gray-600 hover:bg-gray-100
  `}
                                                >
                                                    <div className="w-full text-lg font-semibold">{sku.goldWight}k</div>
                                                </label>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* </ul> */}

                                    {/* </ul> */}

                                    {/* <li>
                                            <input type="radio" id="WhiteGold9k" name="selectedColor" value="color" className="hidden peer" required />
                                            <label htmlFor="WhiteGold9k" className="inline-flex items-center justify-center px-4 py-3 text-[#8b8b7f] bg-white border border-[#f5f5e4] rounded-full cursor-pointer peer-checked:border-gray-100 peer-checked:ring-2 peer-checked:ring-[#f5f5e4] peer-checked:bg-[#f5f5e4] peer-checked:ring-offset-2 peer-checked:text-[#5a5a4b] hover:text-[#5a5a4b] hover:bg-[#f5f5e4]">
                                                <div className="w-full text-lg font-semibold">9k</div>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="RoseGold9k" name="selectedColor" value="color" className="hidden peer" required />
                                            <label htmlFor="RoseGold9k" className="inline-flex items-center justify-center px-4 py-3 text-[#f1a886] bg-white border border-[#f1a886] rounded-full cursor-pointer peer-checked:border-gray-100 peer-checked:ring-2 peer-checked:ring-[#f1a886] peer-checked:bg-[#f1a886] peer-checked:ring-offset-2 peer-checked:text-white hover:text-white hover:bg-[#f1a886">
                                                <div className="w-full text-lg font-semibold">9k</div>
                                            </label>
                                        </li>
                                    </ul>
                                    <ul className="ml-4 md:ml-0 flex flex-row gap-4">
                                        <li>
                                            <input type="radio" id="Gold18k" name="selectedColor" value="color" className="hidden peer" required />
                                            <label htmlFor="Gold18k" className="inline-flex items-center justify-center px-3 py-3 text-[#FFB000] bg-white border border-[#FFB000] rounded-full cursor-pointer peer-checked:border-gray-100 peer-checked:ring-2 peer-checked:ring-[#FFB000] peer-checked:bg-[#FFB000] peer-checked:ring-offset-2 peer-checked:text-white hover:text-white hover:bg-[#FFB000]">
                                                <div className="w-full text-lg font-semibold">18k</div>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="WhiteGold18k" name="selectedColor" value="color" className="hidden peer" required />
                                            <label htmlFor="WhiteGold18k" className="inline-flex items-center justify-center px-3 py-3 text-[#8b8b7f] bg-white border border-[#f5f5e4] rounded-full cursor-pointer peer-checked:border-gray-100 peer-checked:ring-2 peer-checked:ring-[#f5f5e4] peer-checked:bg-[#f5f5e4] peer-checked:ring-offset-2 peer-checked:text-[#5a5a4b] hover:text-[#5a5a4b] hover:bg-[#f5f5e4]">
                                                <div className="w-full text-lg font-semibold">18k</div>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="RoseGold18k" name="selectedColor" value="color" className="hidden peer" required />
                                            <label htmlFor="RoseGold18k" className="inline-flex items-center justify-center px-3 py-3 text-[#f1a886] bg-white border border-[#f1a886] rounded-full cursor-pointer peer-checked:border-gray-100 peer-checked:ring-2 peer-checked:ring-[#f1a886] peer-checked:bg-[#f1a886] peer-checked:ring-offset-2 peer-checked:text-white hover:text-white hover:bg-[#f1a886">
                                                <div className="w-full text-lg font-semibold">18k</div>
                                            </label>
                                        </li> */}
                                    {/* </ul> */}
                                </div>
                                <button onClick={handleSubmit} className="flex my-12 justify-center items-center w-full bg-[#0F172A] py-4 text-white font-semibold gap-2 rounded-lg">
                                    <ShoppingBagIcon className="h-6 w-6" /> Add to Bag
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
