import React from 'react'
import Diff from '@/components/diffFromHuman'

type Props = {
    datas: Data[];
};

type Data = {
    _id: string;
    Products_idProducts: string;
    color: string;
    goldWight: string;
    price: number;
    cost: number;
    idPictures: {
        path: string;
    }[];
};

function SKUs({ datas }: Props) {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        SKUs Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        Color
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        GoldWigth
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        SKUs Image
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        Edit
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase dark:text-gray-400">
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {datas?.length > 0 ? (
                    datas.map((skus) => (
                        <tr key={skus._id}> {/* Add a unique key */}
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg text-blue-100 dark:text-gray-200">
                                {skus._id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg text-blue-100 dark:text-gray-200">
                                {skus.color}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg text-blue-100 dark:text-gray-200">
                                {skus.goldWight}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg text-blue-100 dark:text-gray-200">
                                {skus.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                                image
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                                <a className="text-blue-500 hover:text-blue-700" href="#">Edit</a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                                <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                            </td>
                            <td>
                            <button className="bg-green-300 hover:bg-green-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.3" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                                <span>ดูเพิ่มเติม</span>
                            </button>
                            </td>
                        </tr>
                    )) 
                ) : (
                    <tr>
                        <td colSpan={9} className='text-black p-4'>ไม่มีสินค้า</td>
                    </tr>
                )}
            </tbody>
        </table>
  )
}

export default SKUs