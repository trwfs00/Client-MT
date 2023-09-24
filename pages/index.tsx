import Image from 'next/image'
import MyNav from '@/components/navigation'
import Footer from '@/components/footer2'
import Over from '@/components/categories'

export default function Home() {
  return (
    <div className='h-[200vh]'>
      <MyNav/>
      <Over/>
      
    </div>
  )
}
