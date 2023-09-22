import { GetServerSideProps } from 'next';

const loginForm = () => {
    return (
        <div>
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

export default loginForm