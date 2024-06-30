import { motion } from "framer-motion";

const arrowPath =
	"m29.01,3.97c-.16-.25-.49-.33-.77-.3-.44.05-.88.06-1.31-.05-.25-.04-.5,0-.75-.03-.32-.06-.63-.07-.95-.05-.65-.07-1.3-.14-1.96-.12-.39,0-.67-.02-1.09-.02-.21-.01-.44-.04-.62.1-.45-.1-.82.47-.55.84.07.11.14.21.21.33.4.79.93,1.56,1.38,2.33.02.04.05.08.07.12-.68.51-1.36,1.04-2.01,1.59-3.21-.97-6.83,2.41-8.88,4.57-2.04-1.14-4.32,1.96-5.37,3.42-1.43,2.1-2.36,4.5-2.97,6.95-.29,1.13-.46,2.2-.48,3.4.03.53-.29,1.46.48,1.56.79,0,.56-.97.62-1.49,0-.56.06-1.12.13-1.68.57-3.15,1.7-6.27,3.66-8.84.71-.85,1.97-2.51,3.17-2.44-1.13,1.44-2.03,3.06-2.68,4.77-1.93,5.56,3.35,4.91,4.55.02.5-1.57.34-3.35-.36-4.83,1.71-1.83,4.45-4.4,7.08-4.47-1.31,1.18-3.68,4.15-3.13,5.99.63,1.48,2.52.71,3.38-.12,1.45-1.3,3.04-4.3,1.73-6.11.53-.45,1.08-.88,1.64-1.3.12.19.24.38.36.58.17.23.36.43.5.68.3.49.39,1.22.94,1.51.62.21.82-.46.95-.92.13-.27.22-.55.32-.83.28-.74.86-1.29,1.29-1.94.38-.65.8-1.27,1.1-1.97.15-.4.65-.78.35-1.24Zm-17.12,14.41c-.38,1.34-1.01,3.05-2.53,3.38-.04,0-.09,0-.12-.03-1-1.28,1.59-5.55,2.49-6.69.34,1.07.48,2.24.16,3.33Zm5.9-3.01c-.85.02.23-1.92.42-2.28.65-1.13,1.52-2.13,2.51-2.97.9,1.57-1.21,5.05-2.94,5.25Z";

const draw = {
	hidden: { pathLength: 0, opacity: 0, fillOpacity: 0, strokeWidth: 1 },
	visible: () => {
		const delay = 0.1;
		return {
			pathLength: 1,
			opacity: 1,
			fillOpacity: 1,
			strokeWidth: 0,
			transition: {
				pathLength: { delay, type: "spring", duration: 2.5, bounce: 0 },
				opacity: { delay, duration: 0.01 },
				fillOpacity: { delay: delay + 0.8, duration: 0.35 },
				strokeWidth: { delay: delay + 0.6, duration: 0.5 },
			},
		};
	},
};

function ArrowDoodle() {
	return (
		<motion.svg
			width="128"
			height="128"
			viewBox="0 0 32 32"
			initial="hidden"
			animate="visible"
			whileInView={{
				scale: [1, 0.88, 1, 0.88, 1],
				opacity: [1, 0.75, 1, 0.75, 1],
				rotate: ["90deg", "85deg", "90deg", "85deg", "90deg"],
				transition: {
					duration: 4,
					ease: "easeInOut",
					repeat: Infinity,
				},
			}}
			style={{
				position: "absolute",
				zIndex: 99999,
				top: "-112px",
				left: "-112px",
				transform: "rotate(90deg)",
			}}
		>
			<motion.path
				initial={{ pathLength: 0, fillOpacity: 0, strokeWidth: 1 }}
				animate={{ pathLength: 1, fillOpacity: 1, strokeWidth: 0 }}
				fill={"#ffffff"}
				stroke={"#ffffff"}
				opacity={0}
				d={arrowPath}
				variants={draw}
			/>
		</motion.svg>
	);
}

export default ArrowDoodle;
