{/*
	SectionWrapper.tsx
	- This is a HOC that wraps a component with a motion.section
	- The motion.section has a staggerContainer() animation
	- The motion.section has a whileInView='show' animation
	- The motion.section has a viewport={{ once: true, amount: 0.25 }} animation
	- The motion.section has a className="w-full h-full p-0 m-0" animation
*/}
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const StarWrapper = (Component: any, idName: any) =>
	function HOC(props: any) {
		return (
			<motion.section
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.25 }}
				className="w-full h-full p-0 m-0"
			>
				<span id={idName}>
				</span>
				<Component {...props} />
			</motion.section>
		);
	};

export default StarWrapper;