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
        <div className='bg-white mx-auto max-w-7xl p-8 mt-20 pb-10 md:pb-20'>
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 font-mtserif text-center">
                Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-md font-normal md:text-xl text-center mt-6 mb-12">
                Explore Our Precious Creations and Find Your Perfect Jewel. Feel free to consult with our experts or make an appointment to see and try the real thing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="col-span-2 rounded-3xl overflow-hidden border border-gray-200 ">
                    <div className="grid grid-rows-2 grid-flow-col gap-1 rounded-xl overflow-hidden max-h-[360px] md:max-h-[560px]">
                        <div className="row-span-2 col-span-1">
                            <Image src={imageCustomer1}
                                alt={pic[0].imageAlt}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="col-span-1">
                            <Image src={imageCustomer2}
                                alt={pic[0].imageAlt}
                                className="h-full w-full object-cover object-center "
                            />
                        </div>
                        <div className="col-span-1">
                            <Image src={imageCustomer3}
                                alt={pic[0].imageAlt}
                                className="h-full w-full object-cover object-center"
                            /></div>
                    </div>
                </div>
                <div className="col-span-2 rounded-3xl border border-gray-200 overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.7726172941843!2d102.82767617446024!3d16.436370629506037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228a3db97195f7%3A0xecd0586b8a1c6f75!2sOzone%20Village%20Khon%20Kaen!5e0!3m2!1sth!2sth!4v1695496428041!5m2!1sth!2sth"
                        className="w-full h-full"
                        style={{ border: '0' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="mx-auto mt-10 md:mt-0">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 p-4 md:p-10">
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
        </div>

    )
}

export default contactus