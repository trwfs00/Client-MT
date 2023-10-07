import React, { useState } from 'react'
import Userlist from '@/components/userlist'

type Props = {
    datas: Data[];
};

type Data = {
    _id: string,
    email: string,
    password: string,
    fullname: string,
    phone: string,
    dateOfbirth: Date,
    gender: string,
    profile_picture: string,
    relationship: string,
    isAdmin:string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
};

export const getServerSideProps = async () => {
    try {
      const response = await fetch('http://localhost:8080/user/');
      const datas = await response.json();
  
      return {
        props: { datas },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: { datas: [] },
      };
    }
  }

function index(props: Props) {

    const [Users, setUsers] = useState<Data[]>(props.datas);

  return (
    <Userlist datas={Users}/>
  )
}

export default index