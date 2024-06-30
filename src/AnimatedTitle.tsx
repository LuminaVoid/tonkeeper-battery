import { motion } from "framer-motion";

export function AnimatedTitle({
	title,
	gradientTitle,
	delay,
	duration,
}: {
	title: string;
	gradientTitle?: string;
	delay: number;
	duration: number;
}) {
	return (
		<motion.h1
			initial={{
				opacity: 0,
				scale: 1.5,
				y: "200%",
			}}
			animate={{
				opacity: 1,
				scale: 1,
				y: "0",
			}}
			transition={{ delay: delay, duration: duration }}
		>
			{title}{" "}
			{gradientTitle ? <motion.span>{gradientTitle}</motion.span> : null}
		</motion.h1>
	);
}

export function FadeInText({
	text,
	delay,
	duration,
	className,
}: {
	text: string;
	delay: number;
	duration: number;
	className?: string;
}) {
	return (
		<motion.h2
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{ delay: delay, duration: duration }}
			className={className}
		>
			{text}
		</motion.h2>
	);
}
