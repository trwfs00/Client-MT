import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyNav from '@/components/navigation'
import MyLogin from '@/components/loginForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <MyNav />
      <MyLogin/>
    </div>
  )
}
