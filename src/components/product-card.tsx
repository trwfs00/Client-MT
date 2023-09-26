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
    {
        id: 2,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    {
        id: 3,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    {
        id: 4,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    {
        id: 5,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    {
        id: 6,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    {
        id: 7,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    {
        id: 8,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    {
        id: 9,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    {
        id: 10,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    {
        id: 11,
        name: 'Baguette White Topaz and Diamond Ring',
        href: '#',
        imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/bUZQ6yW1r/DefaultData/TDV0072.jpg',
        imageAlt: "Baguette White Topaz and Diamond Ring",
        price: '฿4,850'
       
    },
    {
        id: 12,
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
            <div className="mx-auto max-w-2xl px-4 py-6 pb-32 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">New Arrirals</h2>
                <div className="mt-6 flex flex-nowrap gap-10 overflow-hidden overflow-x-auto carousel">
                    {products.map((product) => ( 
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full min-w-[18em] min-h-[22em] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between">
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                                <button className="absolute bottom-20 right-4 h-10 flex lg text-md font-normal bg-black items-center rounded-sm py-2 px-2.5 hover:bg-gray-700 ">
                                <ShoppingBagIcon className="h-5 w-5 text-white hover:text-white" />
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


