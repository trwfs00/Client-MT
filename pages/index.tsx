import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import MyNav from '@/components/navigation'
import MyLogin from '@/components/loginForm'
import Myproduct from '@/components/productstore'
import Order from '@/components/order'


const inter = Inter({ subsets: ['latin'] })

type Props = {
  orders: [OrderData],
  orderDetails: [OrderDetailData],
  skus: [SKUsData],
};

type OrderData = {
  _id: string,
  total: number,
  notes: string,
  status: string,
  user_id: string,
  //   orderDetails: [OrderDetailData];
  created_at: string,
  updated_at: string,
  deleted_at: string,
};

type OrderDetailData = {
  _id: string,
  Orders_idOrders: string,
  SKUs: [{
    _id: string,
    size: string,
    qty: number
  }]
};

type SKUsData = {
  _id: string,
  color: string,
  goldWeight: string,
  price: number,
  cost: number,
  idPictures: [string],
  created_at: string,
  updated_at: string,
  deleted_at: string,
};

export const getServerSideProps = async () => {
  try {
    const orderResponse = await fetch('http://localhost:8080/order/');
    const orderData = await orderResponse.json();

    const orderDetailResponse = await fetch('http://localhost:8080/orderdetail/');
    const orderDetailData = await orderDetailResponse.json();

    const skusResponse = await fetch('http://localhost:8080/sku/');
    const skusData = await skusResponse.json();

    return {
      props: {
        orders: JSON.parse(JSON.stringify(orderData)),
        orderDetails: JSON.parse(JSON.stringify(orderDetailData)),
        skus: JSON.parse(JSON.stringify(skusData)),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        orders: [],
        orderDetails: [],
        skus: [],
      },
    };
  }
};

export default function Home(props: Props) {
  const { orders, orderDetails, skus } = props;

  return (
    <div className={inter.className}>
      <Order orders={orders} orderDetails={orderDetails} skus={skus}></Order>
    </div>
  );
}

