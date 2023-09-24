import OurStroy from '@/components/journey'
import Category from '@/components/categories'

export default function index() {
  return (
    <main className='bg-white font-mtsans'>
      <Category/>
      <OurStroy/>
    </main>
  );
}
