import React from 'react'
import { DemoWatch } from '@/public'
import { BiCurrentLocation } from "react-icons/bi";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { BsWatch } from 'react-icons/bs'
import { useRouter } from 'next/router';

export function limitDescription(description: string): string | JSX.Element | undefined {
  const maxLength = 190; // Maximum characters for one-and-a-half lines
  if (description.length > maxLength) {
    const truncatedDescription = description.slice(0, maxLength);
    return (
      <div className='leading-5'>
        {truncatedDescription}
        <span> ... ...</span>
      </div>
    );
  } else {
    return description;
  }
}

const RecommendationCard = (props: any) => {
  const router = useRouter()
  const handleClick = (id: string) => {
    router.push(`/watch/${id}`)
  }
  return (
    <div className={`h-auto rounded-lg overflow-hidden ${props.index === 0 ? 'w-[800px]' : ' w-[400px]'}`}>
      <div className='w-full h-full flex flex-col gap-2'>
        <div className='w-full aspect-[2/1] bg-cover bg-center hover:aspect-[5/3] transition-all cursor-pointer duration-150 ease-in-out rounded-lg relative' style={{ backgroundImage: `url(${DemoWatch.src})` }}>
          <div className='absolute w-full h-full top-0 left-0 bg-transparent bg-opacity-100 hover:bg-black hover:bg-opacity-40 hover:backdrop-filter hover:backdrop-blur-sm text-transparent hover:text-white transition-all duration-150 ease-linear'>
            <div className='w-full h-full flex justify-center items-center flex-col'>
              <span className='text-xl font-bold drop-shadow-lg'>{props.name}</span>
              <span className='text-base font-medium drop-shadow-lg mb-2'>{props.brand}</span>
              <span className='leading-5 tracking-tighter flex flex-wrap break-all px-8 text-justify h-[80px]'>{limitDescription(props.description)}</span>
              <div className="w-full flex flex-row justify-between px-8 mt-4">
                <div className="flex flex-row justify-start gap-4">
                  <div className='flex flex-row gap-2 items-center'><BiCurrentLocation />{props.location}</div>
                  <div className='flex flex-row gap-2 items-center'>
                    <TiStarOutline /> {props.likes} likes
                  </div>
                </div>
                <div className='flex flex-row items-center px-2'>
                  <div className='flex flex-row gap-2 items-center hover:text-green-300' onClick={() => handleClick(props.slug)}><BsWatch className='animate-bounce' />See Detail</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecommendationCard