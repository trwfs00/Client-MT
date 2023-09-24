import {
    ArrowPathIcon,
    Bars3BottomLeftIcon,
    Bars3Icon,
    CalendarDaysIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    HeartIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import React from 'react'


const products = [
    {
        id: 1,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    // More products...
]

export default function Card() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Arrirals</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => ( 
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                                </div>
                                <button className=" absolute bottom-20 right-4 h-10 flex lg text-md font-normal  bg-black  items-end items-center rounded p-2 hover:bg-gray-700 ">
                                <ShoppingBagIcon className="h-5 w-5 text-white translate-y-[0.15em] hover:text-white" />
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


