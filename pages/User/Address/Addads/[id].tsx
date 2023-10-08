import React, { useState } from 'react'
import Addaddress from '@/components/newaddress'
import router, { useRouter } from 'next/router';

type Props = {
    datas: [Data];
};

type Data = {
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
};

function AddAD() {

    return (
        <Addaddress />
    )
}

export default AddAD