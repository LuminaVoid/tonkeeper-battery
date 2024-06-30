import "./App.css";
import PhoneContainer from "./PhoneContainer";
import SectionZero from "./SectionZero";
import MorphingToken from "./morphingToken";
import GithubIcon from "./assets/github.svg";
import TelegramIcon from "./assets/tg.svg";
import AppleIcon from "./assets/apple.svg";
import AndroidIcon from "./assets/android.svg";
import TonCoin from "./tonCoin";

function App() {
	return (
		<>
			<SectionZero />
			<section className="page1">
				<h1>What is the Battery?</h1>
				<p>
					The Battery is an off-chain account in Tonkeeper that allows you to
					stop worrying about having TON, which is necessary for paying gas
					fees. Now you can use Battery{" "}
					<span className="charges-gradient">charges</span> to pay the fees and{" "}
					<span className="ton-gradient">keep</span> your{" "}
					<span className="ton-gradient">TON</span>!
				</p>
				<h2 className="mt-mobile mt-desktop">
					To start using the Battery go to the settings menu in Tonkeeper.
				</h2>
			</section>
			<section className="page2">
				<h1>
					In the settings click on{" "}
					<span className="menu-gradient">Battery [BETA]</span> menu item
				</h1>
			</section>
			<section className="page3">
				<h1>Charging you Battery</h1>
				<h2 className="left-aligned-mobile">
					To use Battery for your gas fees you need to top up your Battery with{" "}
					<span className="charges-gradient">charges</span>
				</h2>
				<h2 className="left-aligned-mobile mb-mobile mb-big-mobile">
					<span className="charges-gradient">Charges</span> are used{" "}
					<span style={{ textDecoration: "underline" }}>instead</span> of{" "}
					<span className="ton-gradient">TON</span> to pay for transaction cost
				</h2>
				<h2>⚡️ Swaps ≈ 50 charges</h2>
				<h2>⚡️ NFT transfers ≈ 4 charges</h2>
				<h2>⚡️ Token transfers ≈ 10 charges</h2>
			</section>
			<section className="page4">
				<h1>Charging via In-App Purchase</h1>
				<h2>On iOS you can charge your battery even directly through fiat!</h2>
			</section>
			<section className="page5">
				<h1>Charging via Tokens</h1>
				<h2>
					You can also charge the Battery using tokens you might already have in
					you wallet.
				</h2>
				<MorphingToken />
			</section>
			<section className="page6">
				<h1>Charging via Tokens</h1>
				<h2>
					Choose the desired amount of charges, confirm the transaction and
					you're ready to go!
				</h2>
			</section>
			<section className="page7">
				<h1>At your fingertips</h1>
				<h2>
					Once charged you will see the{" "}
					<span className="menu-gradient">Battery icon</span> next to your
					balance.
				</h2>
				<h2>
					Tap on it to see your Battery status, settings and charge history.
				</h2>
			</section>
			<section className="page8">
				<h1>Battery status</h1>
				<h2>
					You can modify the settings at any time by tapping{" "}
					<span className="menu-gradient">"Battery Settings"</span> menu item.
				</h2>
			</section>
			<section className="page9">
				<h1>Battery Settings</h1>
				<h2>Customize when your charges are getting used.</h2>
			</section>
			<section className="page10">
				<h1>Try it out!</h1>
				<h2>
					Let's try sending <span className="usdt-gradient">USDT</span> and see
					how it works
				</h2>
			</section>
			<section className="page11">
				<h2>Now the fee will be paid with Battery instead of TON, hooray!</h2>
			</section>
			<section className="page12">
				<h1>Swaps using Battery</h1>
				<h2>Using swap in Tonkeeper is even more frictionless now</h2>
				<h2>Just choose assets you want to trade</h2>
			</section>
			<section className="page13">
				<h1>
					No need to spend precious <span className="ton-gradient">TON</span>
				</h1>
			</section>
			<section className="page14 last-page">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<TonCoin />
				</div>
				<div className="social-list">
					<a
						className="download-link"
						href="https://apps.apple.com/us/app/tonkeeper-ton-wallet/id1587742107"
						rel="noreferrer noopener"
						target="_blank"
					>
						<img className="download-icon" src={AppleIcon} alt="Apple" />
						<span>Tonkeeper iOS</span>
					</a>
					<a
						className="download-link"
						href="https://play.google.com/store/apps/details?id=com.ton_keeper"
						rel="noreferrer noopener"
						target="_blank"
					>
						<img className="download-icon" src={AndroidIcon} alt="Android" />
						<span>Tonkeeper Android</span>
					</a>
					<a
						className="social-link"
						href="https://t.me/tonkeeper_news"
						rel="noreferrer noopener"
						target="_blank"
					>
						<img className="social-icon" src={TelegramIcon} alt="Telegram" />
						<span>@tonkeeper_news</span>
					</a>
					<a
						className="social-link"
						href="https://github.com/tonkeeper"
						rel="noreferrer noopener"
						target="_blank"
					>
						<img className="social-icon" src={GithubIcon} alt="Github" />
						<span>Tonkeeper</span>
					</a>
					<a
						className="social-link"
						href="https://github.com/LuminaVoid/tonkeeper-battery"
						rel="noreferrer noopener"
						target="_blank"
					>
						<img className="social-icon" src={GithubIcon} alt="Github" />
						<span>This page</span>
					</a>
				</div>
				<p>
					© 2024 Tonkeeper.{" "}
					<span style={{ color: "#888888" }}>
						All rights reserved. All trademarks are the property of their
						respective owners.
					</span>
				</p>
			</section>
			<PhoneContainer />
		</>
	);
}

export default App;
