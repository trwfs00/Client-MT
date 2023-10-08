import React from 'react'
import Size from '@/images/size.png' 
import Size2 from '@/images/size2.png' 


function size() {
    return (
        <div className="mx-auto max-w-7xl p-4 bg-white">
            <p className="text-center text-2xl">Size Guide</p>
            <div className="flex h-auto mt-6"> {/* กำหนดความกว้างและความสูงของ div */}
                <img src={Size.src} alt="My Image" className="w-2/4 h-full object-cover " /> {/* ใช้คลาส object-cover เพื่อให้ภาพปรับขนาดให้พอดีกับขนาดของ div */}
                <img src={Size2.src} alt="My Image" className="w-2/4 h-full object-cover " /> {/* ใช้คลาส object-cover เพื่อให้ภาพปรับขนาดให้พอดีกับขนาดของ div */}

            </div>
        </div>
    )
}

export default size