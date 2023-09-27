import MyNav from '@/components/navigation'
import React, { useEffect, useState } from 'react'
import SKUs from '@/src/components/SKUs'
import detailproduct from '@/src/components/detailproduct'
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'

type PageParams = {
  id: string
}

type ContentPageProps = {
  data: Data
}

type ProductPageProps = {
  datas : Datas
}

type Props = {
  data: Data[];
}

type Propss = {
  datas: Datas[];
}

type ResponeFromServer = {
  _id: string;
  Products_idProducts: string;
  color: string;
  goldWight: string;
  price: number;
  cost: number;
  idPictures: {
      _id: string;
  }[];
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

type ResponeFromServers = {
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

type Data = {
  _id: string;
  Products_idProducts: string;
  color: string;
  goldWight: string;
  price: number;
  cost: number;
  idPictures: {
      _id: string;
  }[];
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

type Datas = {
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

export async function getServerSideProps({ params }
  : GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<ProductPageProps>> {
  try {
    let response = await fetch('http://localhost:8080/product/onePro/' + params?.id)
    let ResponeFromServers: ResponeFromServers = await response.json()
    console.log(ResponeFromServers)
    return {
      props: {
        datas: {
          _id: ResponeFromServers._id,
          type: ResponeFromServers.type,
          productName: ResponeFromServers.productName,
          productDesc: ResponeFromServers.productDesc,
          thumbnail: ResponeFromServers.thumbnail,
          idSKU: ResponeFromServers.idSKU,
          created_at: ResponeFromServers.created_at,
          updated_at: ResponeFromServers.updated_at,
          deleted_at: ResponeFromServers.deleted_at
        },
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        datas: {
          _id: '',
          type: '',
          productName: '',
          productDesc: '',
          thumbnail: '',
          idSKU: [],
          created_at: '',
          updated_at: '',
          deleted_at: ''
        },
      },
    }
  }
}

export async function getServerSideProps_skus({ params }
  : GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<ContentPageProps>> {
  try {
    let response = await fetch('http://localhost:8080/product/oneSKUs/' + params?.id)
    let ResponeFromServer: ResponeFromServer = await response.json()
    console.log(ResponeFromServer)
    return {
      props: {
        data: {
          _id: ResponeFromServer._id,
          Products_idProducts: ResponeFromServer.Products_idProducts,
          color: ResponeFromServer.color,
          goldWight: ResponeFromServer.goldWight,
          price: ResponeFromServer.price,
          cost: ResponeFromServer.cost,
          created_at: ResponeFromServer.created_at,
          idPictures: ResponeFromServer.idPictures,
          updated_at: ResponeFromServer.updated_at,
          deleted_at: ResponeFromServer.deleted_at
        },
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        data: {
          _id: '',
          Products_idProducts: '',
          color: '',
          goldWight: '',
          price: 0,
          cost: 0,
          created_at: '',
          idPictures: [],
          updated_at: '',
          deleted_at: ''
        },
      },
    }
  }
}


function details(props: Props, propss : Propss) {

  const [products, setProducts] = useState<Datas[]>(propss.datas);
  const [skus, setSKUs] = useState<Data[]>(props.data);

  return (
    <>
    <MyNav />
    <SKUs datas={skus} />
    <detailproduct data={products}/>
    </>
  )
}

export default details