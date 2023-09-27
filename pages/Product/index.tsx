import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import MyProduct from '@/components/productstore'

const inter = Inter({ subsets: ['latin'] });

type Props = {
  datas: Data[];
}

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
}

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

export default function Home(props: Props) {

  const [products, setProducts] = useState<Data[]>(props.datas);

  return (
    <div className='bg-gray-800 h-screen'>
            <div className='max-w-6xl m-auto mt-10'>
                <div className="grid grid-cols-2">
                    <div>
                        <h1 className='text-2xl font-bold text-white '>Product List</h1>
                        <p className='text-gray-400 mb-4'>There are <b>{products?.length > 0 ? (products.length) : ("No fucking")}</b> Product </p>
                    </div>
                    <div className='flex'>
                        <a href='./Product/addpro' type="button" className=" ml-auto my-auto py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-bold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-m  dark:focus:ring-offset-gray-800"
                        >
                            + Add Product
                        </a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="border rounded-lg overflow-hidden dark:border-gray-700">

                                <MyProduct datas={products} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
