import MyNav from '@/components/navigation'
import React, { useEffect, useState } from 'react'
import SKUs from '@/src/components/SKUs'
import Details from '@/src/components/productdetail'
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Image from 'next/image';
import En from "@/images/En.svg"
import { InformationCircleIcon, MagnifyingGlassIcon, PencilSquareIcon, PlusCircleIcon, ShoppingBagIcon, ShoppingCartIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
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


function details({ data: { _id, type, productName, productDesc, thumbnail, idSKU } }: productPageProps, props: Props) {
  const [skus, setSKUs] = useState<skus[]>(props.data);
  // const [pro, setPro] = useState<Data[]>(data);
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
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          {/* Page content here */}
          <h1 className='text-xl font-bold mt-10 ml-10'>Product List</h1>
          <div className='contrainer mx-10 my-2'>

            <div className="grid grid-cols-3 gap-4">

              <div className="border mt-5 bg-white shadow-md sm:rounded-lg ">
                <div className='mt-5'>
                  <p className='text-center text-md font-medium'>{productName}</p>
                </div>
                <div className="flex justify-center items-center h-48 my-5">
                  <Image width={150}  height={100} src={thumbnail} alt="Logo" />
                </div>
                <div className='flex justify-center items-center'>
                  <p className='mt-2 border sm:rounded-lg p-1 bg-slate-400'>{type}</p>
                </div>
                <div className='mt-5 p-3 text-white sm:rounded-lg bg-slate-700 '>
                  <p>Product Details</p>
                  <p>{productDesc}</p>
                </div>


              </div>
              <div className="col-span-2 ">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 my-5"></div>
                <Details data={skus} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
          {/* Sidebar content here */}
          <li>
            <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <ShoppingCartIcon className="h-6 w-6 text-gray-500 " />
              <span className="flex-1 ml-3 text-left whitespace-nowrap"> Product</span>
            </button>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <UsersIcon className="h-6 w-6 text-gray-500" />
              <span className="flex-1 ml-3 whitespace-nowrap">User</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
              <span className="flex-1 ml-3 whitespace-nowrap">purchase order</span>
            </a>
          </li>
        </ul>

      </div>
    </>
  )
}
export default details
