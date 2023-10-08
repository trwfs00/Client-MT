import React from 'react';
import EditAddress from '@/components/editaddress'; // Import your editing component
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';

type PageParams = {
  id: string;
};

type Props = {
  data: Data; // Define your data structure
};

type Data = {
  _id: string;
  Users_idUsers: string;
  Contact: {
    fullname: string;
    phonenumber: string;
  };
  Address: {
    province: string;
    district: string;
    subdistrict: string;
    streetname: string;
    postcode: string;
  };
};

export async function getServerSideProps({ params }: GetServerSidePropsContext<PageParams>): Promise<GetServerSidePropsResult<Props>> {
  try {
    // Fetch the data for the specified address ID
    let response = await fetch(`http://localhost:8080/address/oneAds/${params?.id}`);
    let responeFromServer: Data = await response.json();
    
    return {
      props: {
        data: responeFromServer,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: {
          _id: '',
          Users_idUsers: '',
          Contact: {
            fullname: '',
            phonenumber: '',
          },
          Address: {
            province: '',
            district: '',
            subdistrict: '',
            streetname: '',
            postcode: '',
          },
        },
      },
    };
  }
}

function EditAddressPage({ data }: Props) {
  return (
    <EditAddress data={data} />
  );
}

export default EditAddressPage;