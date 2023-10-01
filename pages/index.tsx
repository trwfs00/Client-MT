
// import Productdetail from '@/src/components/productdetail'
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

export default function index() {

  const { auth, user } = useAuth();
  console.log(user)

  return (
    <main>
      {user?.fullname}
      <Carousel />
      <Category />
      <Card />
      <Journey />
      <Contactus />
      {/* <Contactus/> */}
      {/* <Footer/> */}
      {/* <Productdetail /> */}
    </main>
  )
}
