import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const BlockWrapper = (Component: any, idName: any) =>
	function HOC(props: any) {
		return (
			<motion.section
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className="w-full lg:px-40 px-5"
			>
				{idName && <span id={idName}>
				</span>}
				<Component {...props} />
			</motion.section>
		);
	};

export default BlockWrapper;