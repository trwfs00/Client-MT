import Image from 'next/image'
import MyNav from '@/components/navigation'
import Footer from '@/components/footer2'
// import Card from '@/components/product-card'

export default function Home() {
  return (
    <div className='h-[100vh]'>
      <MyNav/>
      {/* <Card/> */}
      <Footer/>
    </div>
  )
}
