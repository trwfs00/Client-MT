import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyNav from '@/components/navigation'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <MyNav/>
      <Footer/>
    </div>
  )
}
