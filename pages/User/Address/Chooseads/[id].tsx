import React from 'react'
import Addresss from '@/components/chooseAddress'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { useRouter } from 'next/router'

type PageParams = {
  id: string
}

type ContentPageProps = {
  addressResponse: Data[],
  id: string,
  skudata:SKUData[],
}

type Data = {
  _id: string,
  Users_idUsers: string,
  Contact: {
    fullname: string,
    phonenumber: string
  },
  Address: {
    province: string,
    district: string,
    subdistrict: string,
    streetname: string,
    postcode: string
  }
}

type SKUData = {
    _id: string,
    size: string,
    sku_id: {
        _id: string,
        Products_idProducts: string,
        color: string,
        goldWight: string,
        price: number,
        cost: number,
        idPictures: {
            path: string
        }[],
        deleted_at: string,
        created_at: string,
        updated_at: string,
    }
}

export async function getServerSideProps({ params }: GetServerSidePropsContext<PageParams>): Promise<GetServerSidePropsResult<ContentPageProps>> {
  try {
    const id = params?.id || ''; // Use an empty string as a default value if params?.id is undefined
    let addressResponse = await fetch('http://localhost:8080/address/user/' + id)
    let responseFromServer: Data[] = await addressResponse.json()
    let skucartResponse = await fetch('http://localhost:8080/cart/usercartsku/' + id)
    let responseFromServers: SKUData[] = await skucartResponse.json()
    console.log(responseFromServer)

    return {
      props: {
        addressResponse: responseFromServer,
        id,
        skudata : responseFromServers // Assign the default value here as well
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        addressResponse: [],
        id: '',
        skudata:[]
      },
    }
  }
}

function AddressPage({ addressResponse, id,skudata }: ContentPageProps) {

  return (
    <div>
      <Addresss datas={addressResponse} Users_idUsers={id} SKU={skudata} />
    </div>
  )
}

export default AddressPage
