import { motion } from "framer-motion";

const usdtPath =
	"M28.0343 30.0013C32.8496 30.0013 36.8739 29.1872 37.8574 28.0994C37.0223 27.1768 34.0018 26.4502 30.1658 26.2514V28.5495C29.4791 28.5852 28.7651 28.6027 28.0336 28.6027C27.3021 28.6027 26.5881 28.5852 25.9 28.5495V26.2514C22.0654 26.4502 19.0435 27.1768 18.2084 28.0994C19.1933 29.1872 23.2183 30.0013 28.0336 30.0013H28.0343ZM36.5897 19.1842V22.3489H30.1658V24.5434C34.678 24.7779 38.0639 25.7425 38.0891 26.8968V29.3034C38.0639 30.4577 34.678 31.4202 30.1658 31.6554V37.0412H25.9007V31.6554C21.3885 31.4209 18.004 30.4577 17.9788 29.3034V26.8968C18.004 25.7425 21.3885 24.7779 25.9007 24.5434V22.3489H19.4768V19.1842H36.5904H36.5897ZM16.9505 14.1477H39.5017C40.0407 14.1477 40.537 14.4312 40.8058 14.8918L47.3753 26.173C47.7155 26.7582 47.6147 27.4967 47.1289 27.9706L29.0451 45.6232C28.4585 46.1951 27.5163 46.1951 26.9311 45.6232L8.86967 27.9944C8.37337 27.5086 8.27957 26.7491 8.64567 26.1611L15.6688 14.8568C15.9425 14.4172 16.4283 14.1484 16.9512 14.1484L16.9505 14.1477Z";

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
				pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
				opacity: { delay, duration: 0.01 },
				fillOpacity: { delay: delay + 0.8, duration: 0.35 },
				strokeWidth: { delay: delay + 0.6, duration: 0.5 },
			},
		};
	},
};

function UsdtToken() {
	return (
		<motion.svg
			width="168"
			height="168"
			viewBox="0 0 56 56"
			initial="hidden"
			animate="visible"
		>
			<motion.path
				initial={{ pathLength: 0, fillOpacity: 0, strokeWidth: 1 }}
				animate={{ pathLength: 1, fillOpacity: 1, strokeWidth: 0 }}
				opacity={0}
				fillRule="evenodd"
				fill={"#ffffff"}
				stroke={"#ffffff"}
				d={usdtPath}
				variants={draw}
			/>
		</motion.svg>
	);
}

export default UsdtToken;
