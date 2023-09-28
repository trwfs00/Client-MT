import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Playfair_Display, Noto_Sans_Thai } from 'next/font/google'
import MyNav from '@/components/navigation'
import MyBanner from '@/components/banner'
import MyFooter from '@/components/footer2'

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${playfair.variable} ${noto.variable}`}>
      <MyBanner/>
      <MyNav/>
        <Component {...pageProps} />
      <MyFooter/>
    </main>
  )
}
