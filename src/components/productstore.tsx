import React from 'react';
import Diff from '@/components/diffFromHuman'
import MyLogo from '@/images/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import MyBest from '@/images/best.svg'
import { InformationCircleIcon, MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
import { input } from '@material-tailwind/react';

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
    }[];
    created_at: string;
    updated_at: string;
    deleted_at: string;
};

function productstore({ datas }: Props) {
    return (
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        ประเภทสินค้า
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        ชื่อสินค้า
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        รายละเอียดสินค้า
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        รูปภาพสินค้า
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        วันที่สร้าง
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        แก้ไข
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        ลบ
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        รายละเอียดเพิ่มเติม
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {datas?.length > 0 ? (
                    datas.map((product) => (
                        <tr key={product._id}> {}
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg text-blue-100 dark:text-gray-200">{product.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg text-blue-100 dark:text-gray-200">
                                {product.productName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg text-blue-100 dark:text-gray-200">{product.productDesc}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg text-blue-100 dark:text-gray-200">
                                <img src={product.thumbnail} width={150} height={150} alt="Product Thumbnail" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg text-blue-100 dark:text-gray-200">
                                <Diff timestamp={product.created_at}/>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                                <a className="text-blue-500 hover:text-blue-700" href={`./Product/${product._id}`}>Edit</a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                                <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                            </td>
                            <td>
                            <a href={`./Product/Productdetail/${product._id}`}>
                            <button  className="bg-green-300 hover:bg-green-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.3" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                                <span>ดูเพิ่มเติม</span>
                            </button>
                            </a>
                            </td>
                        </tr>
                    )) 
                ) : (
                    <tr>
                        <td colSpan={7} className='text-white p-4'>ไม่มีสินค้า</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default productstore;
