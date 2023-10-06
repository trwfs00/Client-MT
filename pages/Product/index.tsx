import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyNav from '@/components/navigation'
import React, { useEffect, useState } from 'react'
import MyProduct from '@/components/productlist'
import { useAuth } from '../AuthContext';

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

  const { auth, user } = useAuth();
  console.log()
  
  const [products, setProducts] = useState<Data[]>(props.datas);

  return (
    <>
            <MyProduct datas={products} />
    </>
  );
}
