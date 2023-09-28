import MyNav from '@/components/navigation'
import React, { useEffect, useState } from 'react'
import SKUs from '@/src/components/SKUs'
import Details from '@/src/components/detailproduct'
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'

type PageParams = {
  id: string
}

type ContentPageProps = {
  data: skus
}

type Props = {
  data: skus[];
}

type productPageProps = {
  data: Data
}

type ResponeFromServers = {
  _id: string,
  type: string,
  productName: string,
  productDesc: string,
  thumbnail: string,
  idSKU: {
    _id: string;
  }[],
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


type Data = {
  _id: string,
  type: string,
  productName: string,
  productDesc: string,
  thumbnail: string,
  idSKU: {
    _id: string;
  }[],
}

type skus = {
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

export async function getServerSideProps({ params }
  : GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<productPageProps>> {
  try {
    let response = await fetch('http://localhost:8080/product/onePro/' + params?.id)
    let ResponeFromServers: ResponeFromServers = await response.json()
    console.log(ResponeFromServers)
    return {
      props: {
        data: {
          _id: ResponeFromServers._id,
          type: ResponeFromServers.type,
          productName: ResponeFromServers.productName,
          productDesc: ResponeFromServers.productDesc,
          thumbnail: ResponeFromServers.thumbnail,
          idSKU: ResponeFromServers.idSKU
        },
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        data: {
          _id: '',
          type: '',
          productName: '',
          productDesc: '',
          thumbnail: '',
          idSKU: []
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


function details({ data : {_id,type,productName,productDesc,thumbnail,} }: productPageProps,props: Props) {
  const [skus, setSKUs] = useState<skus[]>(props.data);
  // const [__id, setId] = useState(data._id)
  // const [_type, setType] = useState(data.type)
  // const [_productName, setProductName] = useState(data.productName)
  // const [_productDesc, setProductDesc] = useState(data.productDesc)
  // const [_thumbnail, setThumbnail] = useState(data.thumbnail)

  if (!_id) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MyNav />
      {/* <Details datas={datas}/> */}

      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Product</h2>
      </div>
      <div className="gap-8 flex justify-center items-center lg:grid-cols-3">
        <div className="group p-6 justify-center items-center sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="relative overflow-hidden rounded-xl">
            <img src={thumbnail}
            alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div className="mt-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {productName}
            </h3>
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {type}
            </h4>
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              {productDesc}
            </p>
            <a className="inline-block" href="#">
              <span className="text-info dark:text-blue-300">Read more</span>
            </a>
          </div>
          
        </div>
        
      </div>

      {/* <div className="flex flex-col content-center">
        <img src={thumbnail} alt={productName} className="max-w-fit h-48 object-cover" /><div className="p-4 flex flex-col justify-between">
          <h3 className="text-lg font-bold">{productName}</h3>
          <p className="text-sm">{productDesc}</p>
          <span className="text-gray-500">{type}</span>
        </div>
      </div> */}

      <SKUs datas={skus} />
    </>
  )
}
export default details
