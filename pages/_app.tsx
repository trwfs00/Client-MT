import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Playfair_Display, Noto_Sans_Thai } from 'next/font/google'
import MyNav from '@/components/navigation'
import AdminNav from '@/components/navadmin'
import MyBanner from '@/components/banner'
import MyFooter from '@/components/footer2'
import { useEffect, useState } from 'react'
import { stringify } from 'querystring'
import { AuthProvider } from './AuthContext';
import router from 'next/router'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

const noto = Noto_Sans_Thai({
  subsets: ['thai'],
  variable: '--font-noto'
});

// type Props = {
//   userExist: [UserExist]
// }

// type UserExist = {
//   _id: string
//   email: string,
//   name: string,
// }

interface User {
  isAdmin: boolean;

}

export default function App({ Component, pageProps }: AppProps) {

  const [message, setMessage] = useState('')
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch('http://localhost:8080/user/userExist', {
            credentials: "include"
          })
          const userExist = await response.json()

          // console.log(userExist)
          if (userExist.auth === false) {
            // console.log(userExist)
            setAuth(false)
          } else {
            // console.log(userExist)
            setMessage(`Hi ${userExist.fullname}`)
            setAuth(true)
            setUser(userExist)
            console.log(user)
          }
        } catch (error) {
          console.log(error)
          setMessage(`Error: ${error}`)
          // setAuth(false)
        }

      }
    )()
  })

  // if(user?.isAdmin) {
  //   console.log("admin")
  //   router.push('/admin/product')
  // }else{
  //   console.log('user')
  // }

  return (
    <AuthProvider>
      <main className={`${inter.variable} ${playfair.variable} ${noto.variable} `}>
      <MyBanner />
      <MyNav auth={auth} />
        {/* {user?.isAdmin ? null : <MyBanner />}
        {user?.isAdmin ? <AdminNav/> : <MyNav auth={auth} />} */}
        <Component {...pageProps} />
        <MyFooter />
      </main>
    </AuthProvider>
  )
}
