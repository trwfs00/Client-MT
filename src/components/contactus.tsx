import React from 'react'
import imageCustomer1 from "@/images/customer1.png"
import imageCustomer2 from "@/images/customer2.png"
import imageCustomer3 from "@/images/customer3.png"
import Image from 'next/image'

const pic = [
    {
        imageAlt: "Customer"

    },
    // More products...
]
function contactus() {
    return (
        <>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
                Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
                Explore Our Precious Creations and Find Your Perfect Jewel. Feel free to consult with our experts or make an appointment to see and try the real thing. Bookings only
            </p>
            <div className="grid grid-cols-4 gap-2 mx-auto max-w-2xl sm:mt-10  lg:max-w-4xl">
                <div className="col-span-2 ...">
                    <div className="grid grid-rows-2 grid-flow-col gap-1 rounded-xl overflow-hidden">
                        <div className="row-span-2 col-span-1 rounded-tr ">
                            <Image src={imageCustomer1}
                                alt={pic[0].imageAlt}
                                className="w-full h-full object-center lg:h-full lg:w-full rounded-tr object-cover"
                            />
                        </div>
                        <div className="col-span-1">
                            <Image src={imageCustomer2}
                                alt={pic[0].imageAlt}
                                className="h-full w-full object-contain object-center lg:h-full lg:w-full "
                            />
                        </div>
                        <div className="col-span-1">
                            <Image src={imageCustomer3}
                                alt={pic[0].imageAlt}
                                className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                            /></div>
                    </div>
                </div>
                <div className="row-span-2 col-span-2 ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.7726172941843!2d102.82767617446024!3d16.436370629506037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228a3db97195f7%3A0xecd0586b8a1c6f75!2sOzone%20Village%20Khon%20Kaen!5e0!3m2!1sth!2sth!4v1695496428041!5m2!1sth!2sth"
                        className="w-full h-full rounded"
                        style={{ border: '0' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="mx-auto max-w-2xl py-4  lg:max-w-4xl ">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
                    <div className="relative ">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            THEERA GEMS (Booking Only)
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">Visit us today at Ozone Village Khon Kaen.
                            236/1 Thepharak Alley, Tambon Nai Mueang, Mueang Khon Kaen District, Khon Kaen 40000</dd>
                    </div>
                    <div className="relative ">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            Contact Information
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">Tel: +66 00 000 0000 <br />
                            Email: support@theeragems.com</dd>
                    </div>
                </dl>
            </div>


        </>

    )
}

export default contactus