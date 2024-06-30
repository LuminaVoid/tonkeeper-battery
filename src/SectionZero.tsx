import { AnimatedTitle, FadeInText } from "./AnimatedTitle";
import GithubIcon from "./assets/github.svg";
import TelegramIcon from "./assets/tg.svg";

function SectionZero() {
	const titlePart1 = "Send tokens, NFTs and swap";
	const titlePart2 = "easier with";
	const titlePart2gradient = "Tonkeeper Battery.";
	const text = "Use USDT, jUSDT, NOT or even fiat to pay for the gas fees.";
	return (
		<section className="page0">
			<nav>
				<a
					className="social-link"
					href="https://github.com/LuminaVoid/tonkeeper-battery"
					rel="noreferrer noopener"
					target="_blank"
				>
					<img className="social-icon" src={GithubIcon} alt="Github" />
				</a>
				<a
					className="social-link"
					href="https://t.me/tonkeeper_news"
					rel="noreferrer noopener"
					target="_blank"
				>
					<img className="social-icon" src={TelegramIcon} alt="Github" />
				</a>
			</nav>
			<AnimatedTitle title={titlePart1} delay={0.25} duration={0.55} />
			<AnimatedTitle
				title={titlePart2}
				gradientTitle={titlePart2gradient}
				delay={0.5}
				duration={0.55}
			/>
			<FadeInText
				text={text}
				delay={0.75}
				duration={0.69}
				className="p0-subtitle"
			/>
		</section>
	);
}

export default SectionZero;
