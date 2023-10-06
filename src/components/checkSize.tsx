import React, {useState} from 'react'

export default function checkSize(props: any) {
    const [size, setSize] = useState();
    const handleSelect = () => {
        props.selectSize()
    }
  return (
    <button className="p-3 px-4 border text-xl rounded-xl checked:bg-[#0F172A]">{props.size}</button>
  )
}
