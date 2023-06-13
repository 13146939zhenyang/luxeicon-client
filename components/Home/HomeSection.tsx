import React, { useState, useEffect } from 'react'
import { LuxuryWatch } from '@/public'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { shareLinks } from '@/utils/constants/navbar'

export function limitDescription(description: string): string | JSX.Element | undefined {
	const maxLength = 490; // Maximum characters for one-and-a-half lines
	if (description.length > maxLength) {
		const truncatedDescription = description.slice(0, maxLength);
		return (
			<div className='leading-7 text-justify'>
				{truncatedDescription}
				<span style={{ color: 'white' }}>
					... ...
				</span>
			</div>
		);
	} else {
		return description;
	}
}

const HomeSection = () => {
	const [loading, setLoading] = useState<boolean>(true)
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1200)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className={`w-full relative transition duration-500 ease-in-out background-linear-color flex items-center py-40`}>
			<div className='max-w-7xl mx-auto w-full h-full'>
				<div className='w-full flex sm:flex-row sm:justify-between px-10 flex-col justify-center flex-wrap-reverse'>
					<motion.div
						initial='hidden'
						animate='show'
						variants={
							{
								hidden: {
									opacity: 0,
									x: -100,
									transition: {
										duration: 1,
										ease: 'easeInOut',
									},
								},
								show: {
									opacity: 1,
									x: 0,
									transition: {
										duration: 1,
										ease: 'easeInOut',
									},
								},
							}
						}
						className='text-white flex flex-col justify-center gap-10 max-w-xl'
					>
						<div className='flex flex-col gap-4'>
							<div className='text-[#CBD78D] text-2xl'>subtitle subtitle</div>
							<div className='text-[#C5AA74] text-5xl font-semibold tracking-wider'>TitleTitle</div>
							<div className='break-all'>
								{limitDescription(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)}
							</div>
							<div className='text-[#A6A78D]'>Recommended by @luxeicon</div>
						</div>
						<div>
							<button className='bg-[#A9905C] bg-opacity-80 drop-shadow-2xl px-10 py-2 transition duration-300 ease-in-out border-[1px] border-transparent hover:border-white'>SEE DETAIL</button>
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

					</motion.div>
					<motion.div
						initial='hidden'
						animate='show'
						variants={
							{
								hidden: {
									opacity: 0,
									x: 100,
									transition: {
										duration: 1,
										ease: 'easeInOut',
									},
								},
								show: {
									opacity: 1,
									x: 0,
									transition: {
										duration: 1,
										ease: 'easeInOut',
									},
								},
							}
						}
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
		</div>
	)
}

export default HomeSection