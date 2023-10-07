
import Productdetail from '@/src/components/productdetail'
import Productlist from '@/src/components/productlist'
import Navadmin from '@/src/components/navadmin'
import Addskus from '@/src/components/addskus'
import Addpro from '@/src/components/addproduct'
import Editpd from '@/src/components/editPD'
import Proflie from '@/src/components/proflie'
import Order from '@/src/components/order'

export default function index() {

  const { auth, user } = useAuth();
  console.log(user)

  return (
    <main>
      {user?.fullname}
      <Link href={`./User/${user?.fullname}`}>Crop</Link>
      <Carousel />
      <Category />
      <Card />
      <Journey />
      <Contactus />
      {/* <Contactus/> */}
      {/* <Footer/> */}
      {/* <Productdetail /> */}
    </main>
  )
}
