import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import "./PhoneContainer.css";
import TonKeeperSplash from "./assets/TonKeeperSplash.png";
import HomeNoBattery from "./assets/00_Home_no_battery.png";
import Settings from "./assets/01_Settings.png";
import BatteryNotCharged from "./assets/02_Battery_not_charged.png";
import InAppPurchase from "./assets/03_InAppPurchase.png";
import USDT_charge from "./assets/04_USDT_charge.png";
import HomeWithBattery from "./assets/05_Home_with_battery.png";
import BatteryStatus from "./assets/06_Battery_status.png";
import BatterySettings from "./assets/07_Battery_settings.png";
import SendUsdt1 from "./assets/08_Send_USDT_1.png";
import SendUsdt2 from "./assets/09_Send_USDT_2.png";
import Swap1 from "./assets/10_Swap_1.png";
import Swap2 from "./assets/11_Swap_2.png";
import ArrowDoodle from "./ArrowDoodle";

enum EnterType {
	FADE = 0,
	SLIDE_FROM_RIGHT = 1,
	SLIDE_FROM_BOTTOM = 2,
}

type PhoneContent = {
	image: string;
	enterType: EnterType;
	displacement: { top?: string };
	spotlight?: {
		left: string;
		top: string;
		width: string | number;
		height: string | number;
	};
	interaction: {
		left: string;
		top: string;
		width: string | number;
		height: string | number;
	};
};

const phoneContent: PhoneContent[] = [
	{
		image: TonKeeperSplash,
		enterType: EnterType.FADE,
		displacement: {},
		interaction: {
			left: "35%",
			top: "43%",
			width: "30%",
			height: "15%",
		},
	},
	{
		image: HomeNoBattery,
		enterType: EnterType.FADE,
		displacement: {
			top: "42.5dvh",
		},
		interaction: {
			left: "81.2%",
			top: "11.55%",
			width: "7.6%",
			height: "3.3%",
		},
	},
	{
		image: Settings,
		enterType: EnterType.SLIDE_FROM_RIGHT,
		displacement: {
			top: "17.5dvh",
		},
		interaction: {
			left: "13%",
			top: "48.5%",
			width: "74%",
			height: "5%",
		},
	},
	{
		image: BatteryNotCharged,
		enterType: EnterType.SLIDE_FROM_BOTTOM,
		displacement: {
			top: "37dvh",
		},
		interaction: {
			left: "13%",
			top: "55%",
			width: "74%",
			height: "5.6%",
		},
	},
	{
		image: InAppPurchase,
		enterType: EnterType.FADE,
		displacement: {
			top: "16dvh",
		},
		interaction: {
			left: "81.5%",
			top: "59.7%",
			width: "7.6%",
			height: "3.3%",
		},
	},
	{
		image: BatteryNotCharged,
		enterType: EnterType.FADE,
		displacement: {
			top: "28dvh",
		},
		interaction: {
			left: "13%",
			top: "64%",
			width: "74%",
			height: "5.6%",
		},
	},
	{
		image: USDT_charge,
		enterType: EnterType.SLIDE_FROM_BOTTOM,
		displacement: {
			top: "25dvh",
		},
		interaction: {
			left: "13%",
			top: "48%",
			width: "74%",
			height: "6%",
		},
	},
	{
		image: HomeWithBattery,
		enterType: EnterType.FADE,
		displacement: {
			top: "25dvh",
		},
		interaction: {
			left: "53.5%",
			top: "19%",
			width: "9%",
			height: "5%",
		},
	},
	{
		image: BatteryStatus,
		enterType: EnterType.SLIDE_FROM_BOTTOM,
		displacement: {
			top: "25dvh",
		},
		spotlight: {
			left: "41%",
			top: "36%",
			width: "6px",
			height: "6px",
		},
		interaction: {
			left: "13%",
			top: "41%",
			width: "74%",
			height: "9.5%",
		},
	},
	{
		image: BatterySettings,
		enterType: EnterType.SLIDE_FROM_RIGHT,
		displacement: {
			top: "25dvh",
		},
		interaction: {
			left: "81.2%",
			top: "12.3%",
			width: "7.6%",
			height: "3.3%",
		},
	},
	{
		image: SendUsdt1,
		enterType: EnterType.FADE,
		displacement: {
			top: "15dvh",
		},
		interaction: {
			left: "19%",
			top: "27%",
			width: "11.5%",
			height: "6%",
		},
	},
	{
		image: SendUsdt2,
		enterType: EnterType.SLIDE_FROM_BOTTOM,
		displacement: {
			top: "13dvh",
		},
		spotlight: {
			left: "48.5%",
			top: "52.5%",
			width: "6px",
			height: "6px",
		},
		interaction: {
			left: "13%",
			top: "83%",
			width: "74%",
			height: "6%",
		},
	},
	{
		image: Swap1,
		enterType: EnterType.FADE,
		displacement: {
			top: "25dvh",
		},
		interaction: {
			left: "13%",
			top: "47.5%",
			width: "74%",
			height: "6%",
		},
	},
	{
		image: Swap2,
		enterType: EnterType.SLIDE_FROM_BOTTOM,
		displacement: {
			top: "7dvh",
		},
		spotlight: {
			left: "60%",
			top: "73.5%",
			width: "6px",
			height: "6px",
		},
		interaction: {
			left: "13%",
			top: "79.5%",
			width: "74%",
			height: "6%",
		},
	},
	{
		image: TonKeeperSplash,
		enterType: EnterType.FADE,
		displacement: {
			top: "7dvh",
		},
		interaction: {
			left: "50%",
			top: "50%",
			width: 1,
			height: 1,
		},
	},
];

const variants = {
	enter: (direction: number) => {
		if (direction === 0) {
			return {
				opacity: 0,
			};
		}
		if (direction === 1) {
			return {
				x: 1000,
				opacity: 0,
			};
		}
		/// 2
		return {
			y: 1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		y: 0,
		opacity: 1,
	},
	exit: () => {
		return {
			zIndex: 0,
			opacity: 1,
			transition: { opacity: { delay: 1 } },
		};
	},
};

function PhoneContainer() {
	const [observing, setObserving] = useState(false);
	const [[page, direction], setPage] = useState([0, 0]);

	const paginate = useCallback(
		(toPage: number, direction: number) => {
			setPage([page + toPage, direction]);
		},
		[page]
	);

	useEffect(() => {
		if (!observing) {
			const observableAreas = [
				".page0",
				".page1",
				".page2",
				".page3",
				".page4",
				".page5",
				".page6",
				".page7",
				".page8",
				".page9",
				".page10",
				".page11",
				".page12",
				".page13",
				".page14",
			];
			observableAreas.forEach((area, index) => {
				const observer = new window.IntersectionObserver(
					([entry]) => {
						if (entry.isIntersecting) {
							paginate(index, phoneContent[index].enterType);
						}
					},
					{
						root: null,
						threshold: 0.25,
					}
				);
				const page = document.querySelector(area);
				page && observer.observe(page);
			});
			setObserving(true);
		}
	}, [observing, paginate]);

	return (
		<div
			id="phoneContainer"
			style={{
				...phoneContent[page].displacement,
				opacity: page === phoneContent.length - 1 ? 0 : 1,
			}}
		>
			<img src="iphone.png" alt="Phone" />
			<AnimatePresence>
				<motion.img
					key={page}
					src={phoneContent[page].image}
					variants={variants}
					custom={direction}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						y: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.25 },
					}}
					className="phoneContent"
				/>
				<motion.button
					key={`${page}interaction`}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
					}}
					whileInView={{
						scale: [1, 1.1, 1, 1.1, 1],
						transition: {
							duration: 1.5,
							ease: "easeInOut",
							repeat: Infinity,
						},
					}}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.35 }}
					className="phoneInteraction"
					style={{ ...phoneContent[page].interaction }}
					onClick={() => {
						const nextPage = document.querySelector(`.page${page + 1}`);
						nextPage && nextPage.scrollIntoView({ behavior: "smooth" });
					}}
				>
					{page === 1 || page === 0 ? <ArrowDoodle /> : null}
				</motion.button>
				{phoneContent[page].spotlight && (
					<motion.div
						key={`${page}spotlight`}
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
						}}
						whileInView={{
							scale: [0.5, 1.5, 0.5, 1.5, 0.5],
							opacity: [0.05, 0.7, 0.05, 0.7, 0.05],
							transition: {
								duration: 2.5,
								ease: "easeInOut",
								repeat: Infinity,
							},
						}}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.35 }}
						className="phoneSpotlight"
						style={{ ...phoneContent[page].spotlight }}
					></motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default PhoneContainer;
