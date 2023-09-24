import Image from 'next/image'
import MyNav from '@/components/navigation'
import Footer from '@/components/footer2'
import Over from '@/components/categories'
import Journey from '@/components/journey'

export default function Home() {
  return (
    <div className='h-[200vh]'>
      <MyNav/>
      <Journey/>
    </div>
  )
}
