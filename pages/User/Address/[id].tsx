import React from 'react'
import Addresss from '@/components/myaddress'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { useRouter } from 'next/router'

type PageParams = {
  id: string
}

type ContentPageProps = {
  addressResponse: Data[],
  id: string
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

export async function getServerSideProps({ params }: GetServerSidePropsContext<PageParams>): Promise<GetServerSidePropsResult<ContentPageProps>> {
  try {
    const id = params?.id || ''; // Use an empty string as a default value if params?.id is undefined
    let addressResponse = await fetch('http://localhost:8080/address/user/' + id)
    let responseFromServer: Data[] = await addressResponse.json()
    console.log(responseFromServer)

    return {
      props: {
        addressResponse: responseFromServer,
        id, // Assign the default value here as well
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        addressResponse: [],
        id: ''
      },
    }
  }
}

function AddressPage({ addressResponse, id }: ContentPageProps) {

  return (
    <div>
      <Addresss datas={addressResponse} Users_idUsers={id} />
    </div>
  )
}

export default AddressPage
