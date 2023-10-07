import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Playfair_Display, Noto_Sans_Thai } from 'next/font/google'
import MyNav from '@/components/navigation'
import MyBanner from '@/components/banner'
import MyFooter from '@/components/footer2'
import { useEffect, useState } from 'react'
import { stringify } from 'querystring'
import { AuthProvider } from './AuthContext';
import { useAuth } from './AuthContext';


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

export default function App({ Component, pageProps }: AppProps) {

  const [message, setMessage] = useState('')
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState()

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
          }
        } catch (error) {
          console.log(error)
          setMessage(`Error: ${error}`)
          // setAuth(false)
        }

      }
    )()
  })

  return (
    <AuthProvider>
      <main className={`${inter.variable} ${playfair.variable} ${noto.variable} bg-gray-100`}>
        <>
          <MyBanner />
          <MyNav auth={auth} />
          <Component {...pageProps} />
          <MyFooter />
        </>
      </main>
    </AuthProvider>
  )
}
