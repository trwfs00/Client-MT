import Carousel from '@/components/carousel'
import OurStroy from '@/components/journey'
import Category from '@/components/categories'
import Contact from '@/components/contactus'

export default function index() {
  return (
    <main className='bg-white font-mtsans overflow-hidden'>
      <Carousel/>
      <Category/>
      <OurStroy/>
      <Contact/>
    </main>
  );
}

