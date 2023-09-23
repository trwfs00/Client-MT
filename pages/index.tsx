import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import MyNav from '@/components/navigation'
import MyLogin from '@/components/loginForm'
import Myproduct from '@/components/productstore'
// type Props = {
//   datas: [Data]
// }

// type Data = {
//   _id: string
//   type: string,
//   productName: string,
//   productDesc: string,
//   thumbnail: string,
//   idSKU: [{
//     _id: string
//   }],
//   created_at: string,
//   updated_at: string,
//   deleted_at: string
// }

// export const getServerSideProps = async () => {
//   try {
//     let response = await fetch('http://localhost:8080/product/')
//     let datas = await response.json()

//     return {
//       props: { datas: JSON.parse(JSON.stringify(datas)) }
//     }
//   } catch (error) {
//     console.error(error)
//     return {
//       props: { datas: [] },
//     }
//   }
// }

const index = () => {
  return (
    <div className='bg-gray-100'>
      Enter
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {


//   return {
//     props:{

//     }
//   }
// }

export default index
