import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "antd";
import { Loading, TopNavbar } from '../components'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const { Content } = Layout;
	const [loading, setLoading] = useState(false);
	// router changing adding loading page
	useEffect(() => {
		const handleStart = () => {
			setLoading(true);
		};
		const handleComplete = () => {
			setLoading(false);
		};
		const handleError = () => {
			setLoading(false);
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleError);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleError);
		};
	}, [router]);
	return (
		// <Layout className='bg-gradient-to-r from-indigo-500 to-blue-300 bg-opacity-50 backdrop-filter backdrop-blur-lg w-full h-[100vh] p-0 relative'>
		<Layout className='w-full h-[100vh] p-0 relative'>
			<div className='absolute top-0 left-0 w-full bg-black bg-opacity-5 z-30'>
				<TopNavbar />
			</div>
			<Content className="w-full h-[100vh] overflow-scroll">
				{loading && <Loading />}
				<Component {...pageProps} />
			</Content>
		</Layout>
	)
}
