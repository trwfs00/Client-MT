import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Signin from '@/src/components/loginForm'
import { useEffect, useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import Link from 'next/link';
import router from 'next/router';


const register = () => {

    // const [selectedGender, setSelectedGender] = useState(0);

    const handleValueChange = (newValue: any) => {
        //console.log("newValue:", newValue);
        setValue(newValue);
    }

    function convertDateFormat(originalDateString: any) {
        // Split the original date string using '-'
        const parts = originalDateString.split('-');
        // Rearrange the parts into 'YYYY-MM-DD' format
        const reformattedDateString = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
        return reformattedDateString;
    }

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });
    // const [value, setValue] = useState({
    //     startDate: null ,
    //     endDate: null
    // });
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setConPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('Female')
    // const [dateOfbirth, setdateOfbirth] = useState('')
    const [relationship, setRelationship] = useState('')

    // const [userID,setUserID] = useState('')

    const [message, setMessage] = useState('')
    const [error, setError] = useState('')



    console.log(gender)

    useEffect(() => {

        console.log(gender)
        console.log(value)
    }, [value])


    const handleSubmit = async (e: any) => {
        e.preventDefault()



        if (fullname && email && password && conpassword && phone && gender && value && relationship) {
            const dateOfbirth = value.endDate
            // console.log(dateOfbirth)
            if (password === conpassword) {
                console.log(fullname, email, password, conpassword, phone, gender, dateOfbirth, relationship)
                try {
                    const register = await fetch('http://localhost:8080/user/register', {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password, fullname, phone, gender, dateOfbirth, relationship })
                    })
                    const _register = await register.json()
                    console.log(_register)
                    const userID = _register._id
                    console.log(userID)
                    await fetch('http://localhost:8080/user/login', {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'include',
                        body: JSON.stringify({ email, password })
                    })
                    await fetch('http://localhost:8080/cart/addcart',{
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        credentials: 'include',
                        body: JSON.stringify({ Users_idUsers:userID })
                    })
                    await router.push('/');
                } catch (err: any) {
                    setError(err)
                    console.log(err)
                }
            } else {
                setMessage('password do not match!!')
                console.log('password do not match!!')
            }
        } else {
            setMessage('')
        }

    }

    return (
        <section className="bg-gray-100 font-mtsans">
            <div className="flex flex-col items-center justify-center px-6 py-10 sm:py-12 md:py-14">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="font-mtserif text-2xl md:text-2xl lg:text-3xl font-semibold leading-tight tracking-tight text-gray-900">
                            Create an Account
                        </h1>
                        <p className="font-mtsans text-md font-normal leading-tight tracking-tight text-gray-600">
                            You can save time during checkout, provide your credentials and checkout faster.
                        </p>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div className='flex flex-col md:flex-row gap-10'>
                                <div className='flex-1'>
                                    <h3 className="block text-md font-medium text-gray-900">Account Information (*)</h3>
                                    <div className="relative z-0 w-full my-6 group text-left">
                                        <input type="text" name="floating_name" id="floating_name"
                                            onChange={e => setFullName(e.target.value)}
                                            className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                    </div>
                                    <div className="relative z-0 w-full my-6 group text-left">
                                        <input type="email" name="floating_email" id="floating_email"
                                            onChange={e => setEmail(e.target.value)}
                                            className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                    </div>
                                    <div className="relative z-0 w-full my-6 group text-left">
                                        <input type="password" name="floating_password" id="floating_password"
                                            onChange={e => setPassword(e.target.value)}
                                            className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                        <p className='text-xs my-2 italic'>Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number.</p>
                                    </div>
                                    <div className="relative z-0 w-full my-6 group text-left">
                                        <input type="password" name="floating_confirm_password" id="floating_confirm_password"
                                            onChange={e => setConPassword(e.target.value)}
                                            className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                                        <label htmlFor="floating_confirm_password" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                                        {message ? <p className='text-red-500'>{message}</p> : null}
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <h3 className="block text-md font-medium text-gray-900">Contact (Optional)</h3>
                                    <div className="relative z-0 w-full my-6 group text-left">
                                        <input type="tel" name="floating_phone" id="floating_phone"
                                            onChange={e => setPhone(e.target.value)}
                                            className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " />
                                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                                    </div>
                                    <h3 className="block text-md font-medium text-gray-900 mb-2">Gender (Optional)</h3>
                                    <div className="flex items-center mb-2 pl-4">
                                        <input
                                            id="radio_female"
                                            type="radio"
                                            value="0"
                                            name="radio_gender"
                                            className="w-4 h-4 text-gray-700 bg-gray-100 border-gray-300"
                                            checked={gender === 'Female'}
                                            onChange={() => setGender('Female')}
                                            defaultChecked={true}
                                        />
                                        <label htmlFor="radio_female" className="ml-2 text-md font-normal text-gray-900 dark:text-gray-300">Female</label>
                                    </div>
                                    <div className="flex items-center mb-3 pl-4">
                                        <input
                                            id="radio_male"
                                            type="radio"
                                            value="1"
                                            name="radio_gender"
                                            className="w-4 h-4 text-gray-700 bg-gray-100 border-gray-300"
                                            checked={gender === "Male"}
                                            onChange={() => setGender("Male")}
                                        />
                                        <label htmlFor="radio_male" className="ml-2 text-md font-normal text-gray-900 dark:text-gray-300">Male</label>
                                    </div>
                                    <h3 className="block text-md font-medium text-gray-900 mt-6 md:mt-0 mb-2">Birthday (Optional)</h3>
                                    <div className="flex items-center mb-6 md:mb-2">
                                        <Datepicker
                                            useRange={false}
                                            asSingle={true}
                                            value={value}
                                            primaryColor={"blue"}
                                            onChange={handleValueChange}
                                            displayFormat={"DD-MM-YYYY"}
                                            readOnly={true}
                                            inputClassName={'py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 peer'}
                                        />
                                    </div>
                                    <label htmlFor="underline_select" className="sr-only">Underline select</label>
                                    <select id="underline_select"
                                        onChange={e => setRelationship(e.target.value)}
                                        className="block py-3.5 px-0 w-full text-md font-normal text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer">
                                        <option selected disabled>Relationship Status (optional)</option>
                                        <option value="Marriged">Marriged</option>
                                        <option value="Engaged">Engaged</option>
                                        <option value="Single">Single</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="offers" aria-describedby="offers" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="offers" className="font-normal italic text-gray-700">Yes, I’d like to get insider information about exclusive offers, events and more.</label>
                                </div>
                            </div> */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-normal italic text-gray-700">I accept the <Link className="font-medium text-gray-900 hover:underline" href="#">Terms and Conditions</Link></label>
                                </div>
                            </div>
                            <div className="block pt-4 pb-6">
                                <button onClick={handleSubmit} type="submit" className="w-full bg-[#0F172A] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center">Create an account</button>
                            </div>
                            <p className="text-md font-normal text-gray-500">
                                Already have an account? <Signin classNames={"inline-block text-md font-semibold leading-6 text-gray-900 w-auto hover:underline"} />
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props: {

        }
    }
}

export default register