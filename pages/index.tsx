import { GetServerSideProps } from 'next';

const index = () => {
  return (
    <div className='bg-gray-100'>
      Enter
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
