import React, { useState, useEffect } from 'react'
import { BlockWrapper } from '../Hoc'
import { LuxeiconLogo } from '../../public'
import Image from 'next/image'
import { topNavLinks } from '@/utils/constants/navbar'

const TopNavbar = () => {
	return (
		<>
			<div className='w-full lg:flex hidden justify-center py-6 flex-row items-center'>
				<Image src={LuxeiconLogo.src} alt="luxeicon-logo" width={180} height={300} quality={100} className='drop-shadow-lg'></Image>
			</div>
			<div className='w-full flex flex-row gap-10 justify-center'>
				{topNavLinks.map((link, index) => {
					return (
						<div key={index} className='px-4'>
							<a href={link.path} className='text-white font-semibold text-xs drop-shadow-lg'>{link.title}</a>
						</div>
					)
				})
				}
			</div>
		</>
	)
}

export default BlockWrapper(TopNavbar, '')