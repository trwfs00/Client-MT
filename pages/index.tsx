import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyNav from '@/components/navigation'
import Footer from '@/components/footer2'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [message, setMessage] = useState('')
  const [auth,setAuth] = useState(false)

  // useEffect(() => {
  //   (
  //     async () => {
  //       try {
  //         const response = await fetch('http://localhost:8080/user/userExist', {
  //           credentials: "include"
  //         })
  //         const user = await response.json()

  //         console.log(user)
  //         setMessage(`Hi ${user.fullname}`)
  //         setAuth(true)
  //       } catch (error) {
  //         console.log(error)
  //         setMessage(`Error: ${error}`)
  //         setAuth(false)
  //       }

  //     }
  //   )()
  // })

  return (
    <div className={inter.className}>
      {message}
    </div>
  );
}
