import React, { useState, useEffect } from 'react'
import { LuxuryWatch } from '@/public'
import Image from 'next/image'
import { SectionWrapper } from '@/components/Hoc'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { shareLinks } from '@/utils/constants/navbar'

const HomeSection = () => {
	const [loading, setLoading] = useState<boolean>(true)
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1200)
		return () => clearTimeout(timer)
	}, [])

	return (
		// <div className={`w-full h-[100vh] relative flex items-end bg-gradient-to-r from-[#F67A2E] to-[#ED6F2C] transition duration-500 ease-in-out`}>
		<div className={`w-full h-[100vh] relative transition duration-500 ease-in-out background-linear-color flex items-center`}>
			{/* mask */}
			<div className='block lg:hidden w-full h-full bg-black bg-opacity-[0.3] absolute top-0 left-0 z-20'></div>
			{/*
					F67A2E
					F98231
					ED6F2C
					F5782E
					*/}
			<div
				className='mx-auto lg:w-[1100px] grid lg:grid-cols-2 gap-4'
			>
				<motion.div
					variants={fadeIn('right', 'spring', 1 * 0.5, 1.5)}
					className='text-white col-span-1 flex flex-col justify-center gap-10'
				>
					<div className='flex flex-col gap-4'>
						<div className='text-[#CBD78D] text-lg'>subtitle subtitle</div>
						<div className='text-[#C5AA74] text-4xl'>TitleTitle</div>
						<div className='w-full flex flex-col text-xs'>
							<span className='truncate'>descriptiondescriptiondescriptionde</span>
							<span className='truncate'>descriptiondescriptiondescr</span>
							<span className='truncate'>descriptiondescriptiond</span>
							<span className='truncate'>descriptiondescriptiondescrip</span>
							<span className='truncate'>descriptiondescriptiondescriptiondes</span>
						</div>
						<div className='text-[#A6A78D]'>sub description</div>
					</div>
					<div>
						<button className='bg-[#A9905C] bg-opacity-80 drop-shadow-2xl px-10 py-2 transition duration-300 ease-in-out border-[1px] border-transparent hover:border-white'>Start</button>
					</div>
					<div className='w-full flex flex-row gap-4'>
						<span>Share</span>
						<div className='flex flex-row gap-2 items-center'>
							{
								shareLinks.map((link, index) => (
									<link.icon key={index} className='text-[#A49462] hover:text-white transition duration-300 ease-in-out cursor-pointer' />
								))
							}
						</div>
					</div>
					<div className='bg-white w-full'>subdescription</div>
				</motion.div>
				<motion.div
					variants={fadeIn('right', 'spring', 2 * 0.5, 1.5)}
					className='text-white col-span-1'
				>
					<Image
						src={LuxuryWatch.src}
						alt="luxicon-home"
						width={550}
						height={550}
						quality={100}
						blurDataURL='logo'
						className={`mb-0 min-[1650px]:object-[10%_30%] object-cover object-[20%_50%] rotate-[46deg] transition duration-500 ease-in-out z-50 ${loading ? 'scale-80' : 'scale-[95%]'}`}
						style={{ filter: " drop-shadow(-1rem 4rem 2.5rem #333534)" }}
					/>
				</motion.div>
			</div>
		</div>
	)
}

export default SectionWrapper(HomeSection, '')