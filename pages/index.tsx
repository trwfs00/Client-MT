import Image from 'next/image'
import MyNav from '@/components/navigation'
import Footer from '@/components/footer2'
import Card from '@/components/product-card'
import Category from '@/components/categories'
import Contactus from "@/components/contactus";
import Purchases from "@/components/purchases";
import Carousel from "@/components/carousel"
import Journey from '@/components/journey'
import Address from '@/components/myaddress'
import NewAddress from '@/components/newaddress'
import NewAddresss from '@/pages/auth/register'
import EditAddress from '@/components/editaddress'
import Checkout from '@/components/checkout'
import Successful from '@/components/successful'
import Search from '@/components/search'
import Size from '@/components/size'


export default function index() {
  return (
    <main> 
      <Carousel />
      <Category />
      <Card />
      <Journey />
      <Contactus /> 
      <Contactus/>
    </main>
  )
}
