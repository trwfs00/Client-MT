import { GetServerSideProps } from 'next';
import MyNav from '../src/components/navigation';

const main = () => {
    return (
        <>
            <MyNav/>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default main