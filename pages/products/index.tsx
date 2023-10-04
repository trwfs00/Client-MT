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
        price:string;
    }[];
    created_at: string;
    updated_at: string;
    deleted_at: string;
};

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
    console.log(datas)
    return (
        <section className="bg-white">
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
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Product</span>
                            </div>
                        </li>
                        {/* <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Item Name</span>
                            </div>
                        </li> */}
                    </ol>
                </nav>
                <div className="p-4">
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


                </div>
            </div>
        </section>
    );
}
