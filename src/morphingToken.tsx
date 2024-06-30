import { useEffect, useState } from "react";
import TonCoin from "./tonCoin";
import UsdtToken from "./usdtToken";
import { motion, AnimatePresence } from "framer-motion";

function MorphingToken() {
	const [currentToken, setCurrentToken] = useState("ton");

	useEffect(() => {
		const intId = setInterval(() => {
			setCurrentToken((prev) => (prev === "ton" ? "usdt" : "ton"));
		}, 2500);

		return () => {
			intId && clearInterval(intId);
		};
	}, []);
	return (
		<div className="morphing-wrapper">
			<AnimatePresence mode="wait">
				<motion.div
					key={currentToken}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 2 } }}
					exit={{ opacity: 0, transition: { duration: 0.5 } }}
					className="token-container"
					style={{
						backgroundColor: currentToken === "ton" ? "#0098EA" : "#009393",
						boxShadow:
							currentToken === "ton"
								? "0 0 30px 3px rgba(0, 152, 235, 0.75), 0 0 50px 6px rgba(0, 152, 235, 0.5), 0 0 70px 9px rgba(0, 152, 235, 0.15)"
								: "0 0 30px 3px rgba(0, 147, 147, 0.75), 0 0 50px 6px rgba(0, 147, 147, 0.5), 0 0 70px 9px rgba(0, 147, 147, 0.15)",
					}}
				>
					{currentToken === "ton" ? (
						<TonCoin key="motion-ton" />
					) : (
						<UsdtToken key="motion-usdt" />
					)}
				</motion.div>
			</AnimatePresence>
			<h2 style={{ padding: "0px 8px 0px 16px" }}>Charge with</h2>
			<AnimatePresence mode="wait">
				<motion.h2
					key={currentToken}
					style={{
						minWidth: "64px",
						textAlign: "left",
					}}
					className={`${currentToken}-gradient`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 2 } }}
					exit={{ opacity: 0, transition: { duration: 0.5 } }}
				>
					{currentToken.toUpperCase()}
				</motion.h2>
			</AnimatePresence>
		</div>
	);
}

export default MorphingToken;
