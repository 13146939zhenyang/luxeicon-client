import React from 'react'
import { LuxuryWatch } from '@/public'
import { useRouter } from 'next/router'

const CategoryCard = (props: any) => {
    const router = useRouter()
    const handleClick = (id: string) => {
        router.push(`/categories/${id}`, undefined, { shallow: true })
    }
    return (
        <div className='w-[200px] px-2 pb-4 button-color
        hover:bg-[#A9905C] hover:bg-opacity-70 hover:backdrop-blur-sm hover:backdrop-filter hover:scale-150 hover:z-20 z-10
        shadow-lg rounded-md transition duration ease-in-out' onClick={() => handleClick(props.slug)}>
            <div className='w-full h-full flex flex-col gap-4  text-white'>
                <div className='w-full h-auto px-2 overflow-hidden z-10'>
                    <img src={LuxuryWatch.src} alt="" className='w-full h-full rotate-45 scale-90 hover:-translate-y-2 transition duration-150 ease-in-out cursor-pointer drop-shadow-lg' />
                </div>
                <span className='w-[150px] text-center mx-auto break-words cursor-pointer drop-shadow-md z-10 font-semibold'>{props.name}</span>
            </div>
        </div>
    )
}

export default CategoryCard