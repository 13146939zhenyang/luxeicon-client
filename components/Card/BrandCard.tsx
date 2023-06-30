import React from 'react'
import { useRouter } from 'next/router'

const BrandCard = (props: any) => {
    const router = useRouter()
    const handleClick = (id: string) => {
        router.push(`/brands/${id}`)
    }
    return (
        <div
            className="px-4 py-2 h-[65px] aspect-[2/1] cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-10 backdrop-blur-sm backdrop-filter hover:scale-[200%] z-0 hover:z-20 hover:rounded-lg transition duration-75 ease-in flex justify-center items-center"
            onClick={() => handleClick(props.slug)}
        >
            <img src={props.image.src} alt="" className='w-full h-auto'/>
        </div>
    )
}

export default BrandCard