import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import Myproduct from '@/components/productstore'

const inter = Inter({ subsets: ['latin'] })

type Props = {
    datas: [Data]
  }
  
  type Data = {
    _id: string
    type: string,
    productName: string,
    productDesc: string,
    thumbnail: {
        data: Buffer,
        contentType: string
    }[],
    idSKU:{
        _id: string
    }[],
    created_at: string,
    updated_at: string,
    deleted_at: string
  }

  
  export const getServerSideProps = async () => {
    try {
      let response = await fetch('http://localhost:8080/product/')
      let datas = await response.json()
  
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
  
  export default function Home(props: Props) {
    const [product, setproduct] = useState<[Data]>(props.datas)
    return (
      <div className={inter.className}>
        <Myproduct datas={product}></Myproduct>
      </div>
    )
  }