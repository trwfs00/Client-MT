import Image from 'next/image'
import MyNav from '@/components/navigation'
import Footer from '@/components/footer2'
import Card from '@/components/product-card'
import Category from '@/components/categories'
import Contactus from "@/components/contactus";
import Purchases from "@/components/purchases";
import Carousel from "@/components/carousel"
import Journey from '@/components/journey'

export default function index() {
  return (
    <main>
      <Carousel />
      <Category />
      <Card />
      <Journey />
      <Contactus />
      {/* <Contactus/> */}
      {/* <Footer/> */}
    </main>
  )
}
