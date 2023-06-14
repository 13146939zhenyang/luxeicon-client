import React, { useState, useEffect } from 'react'
import { LuxeiconLogo } from '../../public'
import { topNavLinks, topNavRightLinks } from '@/utils/constants/navbar'
import { useRouter } from 'next/router'

const TopNavbar = ({ scrolled }: { scrolled: boolean }) => {
	const router = useRouter()
	const [active, setActive] = useState<string>('')
	const handleSelected = (url: any) => {
		setActive(url.value)
		router.push(url.path, undefined, { shallow: true })
	}

	return (
		<div className={`${scrolled ? 'bg-gray-400 bg-opacity-40 backdrop-blur-lg backdrop-filter shadow-xl py-2' : 'py-4'}  fixed z-20 top-0 left-0 w-full transition-all duration-300 ease-in-out`}>
			<div className={`w-full flex py-6 flex-row items-center relative max-w-7xl mx-auto justify-between`}>
				<div className='flex flex-row gap-8 z-20'>
					{topNavLinks.map((link, index) => {
						return (
							<div key={index} className='px-4'>
								<button onClick={() => handleSelected(link)} className={`font-semibold text-sm drop-shadow-lg z-20 
								${active === link.value ? 'text-blue-300' : 'text-white'}
								hover:text-blue-300 transition duration-300 ease-in-out
								`}>{link.title}</button>
								<div className={`w-full h-[2px] mt-[2px] rounded-full ${active === link.value ? 'bg-blue-300' : 'bg-white'}`}></div>
							</div>
						)
					})
					}
				</div>
				<div className='flex flex-row gap-12 z-20'>
					{topNavRightLinks.map((link, index) => {
						return (
							<div key={index}>
								{link.value === 'login' ? <>
									<button onClick={() => console.log(`${link.path}`)} className={`font-semibold text-sm drop-shadow-lg z-20 border-[2px] rounded-lg h-[28px] px-4 flex items-center justify-center
								${active === link.value ? 'text-blue-300 ' : 'text-white'}
								hover:border-blue-300 transition duration-300 ease-in-out
								`}>{link.title}</button>
								</> : <>
									<button onClick={() => console.log(`${link.path}`)} className={`font-semibold text-sm drop-shadow-lg z-20 
								${active === link.value ? 'text-blue-300' : 'text-white'}
								hover:text-blue-300 transition duration-300 ease-in-out
								`}>{link.title}</button>
									<div className={`w-full h-[2px] mt-[2px] rounded-full ${active === link.value ? 'bg-blue-300' : 'bg-white'}`}></div>
								</>}
							</div>
						)
					})
					}
				</div>
				<div className='w-full h-full absolute top-0 left-0 flex justify-center items-center z-10'>
					<img src={LuxeiconLogo.src} alt="luxeicon-logo" className='drop-shadow-lg h-[40px] w-auto cursor-pointer' onClick={() => { router.push('/', undefined, { shallow: true }); setActive('') }} />
				</div>
			</div>
		</div>
	)
}

export default TopNavbar