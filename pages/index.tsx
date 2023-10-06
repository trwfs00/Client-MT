
import Productdetail from '@/src/components/productdetail'
// import Productlist from '@/src/components/productlist'
import Navadmin from '@/src/components/navadmin'
import Addskus from '@/src/components/addskus'
import Addpro from '@/src/components/addproduct'
import Editpd from '@/src/components/editPD'
import Editskus from '@/src/components/editskus'
import Order from '@/src/components/order'
import Image from 'next/image'
import MyNav from '@/components/navigation'
import Footer from '@/components/footer2'
import Card from '@/components/product-card'
import Category from '@/components/categories'
import Contactus from "@/components/contactus";
import Purchases from "@/components/purchases";
import Carousel from "@/components/carousel"
import Journey from '@/components/journey'
import { useAuth } from './AuthContext';
import router from 'next/router'

type Props = {
  datas: Data[];
};

type Data = {
  _id: string;
  type: string;
  productName: string;
  productDesc: string;
  thumbnail: string;
  idSKU: {
      _id: string;
      price:string;
  }[];
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

export const getServerSideProps = async () => {
  try {
      const response = await fetch('http://localhost:8080/product/');
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

export default function index({ datas }: Props) {

  const { auth, user } = useAuth();

  // console.log(user?.isAdmin)

  // if(user?.isAdmin) {
  //   console.log("admin")
  //   router.push('/admin/product')
  // }else{
  //   console.log('user')
  // }
  



  return (
    <main>
      <Carousel />
      <Category />
      <Card datas={datas} />
      <Journey />
      <Contactus />
    </main>
  )
}