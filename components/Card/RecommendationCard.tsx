import React from 'react'
import { DemoWatch } from '@/public'

const RecommendationCard = (props: any) => {
  return (
    <div className='w-[400px] h-auto'>
      <div className='w-full h-full flex flex-col gap-2'>
        <div className='w-full aspect-[2/1] bg-cover bg-center hover:aspect-[4/3] transition-all cursor-pointer duration-150 ease-in-out relative' style={{ backgroundImage: `url(${DemoWatch.src})` }}>
          <div className='absolute w-full h-full top-0 left-0 bg-transparent bg-opacity-100 hover:bg-black hover:bg-opacity-30 hover:backdrop-filter hover:backdrop-blur-sm text-transparent hover:text-white'>
            <div className='w-full h-full flex justify-center items-center'>
              <span>{props.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecommendationCard