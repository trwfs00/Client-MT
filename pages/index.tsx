import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyNav from '@/components/navigation'
import Footer from '@/components/footer2'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  userExist: [UserExist]
}

type UserExist = {
  _id: string
  email: string,
  name: string,
}

export default function Home(props: Props) {

  
  const [userExist, setUserExist] = useState<[UserExist]>(props.userExist)

  // console.log(userExist)

  // useEffect(() => {
      
  //       const response =  fetch('http://localhost:8080/user/existUser');
        
  //       if (response.ok) {
  //         const data =  response.json();
  //         setUserExist(data);
  //         console.log('test')
  //       } else {
  //         console.error('Response not OK:', response.status, response.statusText);
  //         // setUserExist({});
  //       }

  // }, []);


  useEffect(() => {
    // Define the URL of your Express API endpoint
    const apiUrl = 'http://localhost:8080/user/existUser'; // Replace with the actual URL

    // Fetch data from the API endpoint
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data to the state
        setUserExist(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(props)

  return (
    <div className='h-[100vh]'>
      <MyNav/>
      <Journey/>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


  return {
    props:{

    }
  }
}

export default index


// export const getServerSideProps = async () => {
//   try {
//     let response = await fetch('http://localhost:8080/user/existUser')
//     let userExist = await response.json()
//     console.log(userExist)
//     return {
//       props: { userExist: JSON.parse(JSON.stringify(userExist)) }
//     }
//   } catch (err) {
//     console.error(err)
//     return {
//       props: { userExist: "nothing" },
//     }
//   }
// }