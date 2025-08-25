import React, { useEffect, useState } from "react";
import styles from "./IndustriesServed.module.css";
import { motion } from "framer-motion";
import { Utensils, Sparkles, Pill, Package } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const contentPairs = [
	{
		left: {
			icon: <Utensils />,
			text: "FMCG",
			newtext:
				"Food, beverage, and household packaging labels",
		},
		right: {
			icon: <Sparkles />,
			text: "Cosmetics & Personal Care",
			newtext:
				"Premium, durable labels with gloss or laminated finishes",
		},
	},
	{
		left: {
			icon: <Pill />,
			text: "Pharmaceuticals",
			newtext:
				"Compliant labels with batch coding and barcoding options",
		},
		right: {
			icon: <Package />,
			text: "Retail & Logistics",
			newtext:
				"Barcodes, price tags, and shipping labels",
		},
	},
];

export default function IndustriesServed() {
	const [startOrbit, setStartOrbit] = useState(false);
	const [activeIndex, setActiveIndex] = useState(null);
	const [isPaused, setIsPaused] = useState(false);
	const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
	const [showCursor, setShowCursor] = useState(true);
	const [hasAnimated, setHasAnimated] = useState(false);

	const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

	const flatContent = contentPairs.flatMap((pair) => [pair.left, pair.right]);

	const typeSpeed = 100;
	const pauseAfterTyping = 2000;

	useEffect(() => {
		if (!inView || startOrbit || hasAnimated) return;

		const totalSlideInDelay = contentPairs.length * 1.2 * 1000 + 1000;
		const timeout = setTimeout(() => {
			setStartOrbit(true);
			setActiveIndex(0);
			setHasAnimated(true);
		}, totalSlideInDelay);

		return () => clearTimeout(timeout);
	}, [inView, startOrbit, hasAnimated]);

	useEffect(() => {
		if (!startOrbit || activeIndex === null) return;

		const currentText = flatContent[activeIndex].text;
		const typingDuration = currentText.length * typeSpeed;
		const totalDelay = typingDuration + pauseAfterTyping;

		const interval = setInterval(() => {
			setIsPaused(true);
			setTimeout(() => {
				setActiveIndex((prev) => (prev + 1) % flatContent.length);
				setIsPaused(false);
			}, totalDelay);
		}, totalDelay + 2000);

		return () => clearInterval(interval);
	}, [startOrbit, activeIndex, flatContent]);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const radius = windowWidth < 768 ? 130 : 240;

	return (
		<section className={styles.whySection} ref={ref}>
			<h2 className={styles.title}>
				<span className={styles.handUnderline}>Industries</span> We Serve
			</h2>
			<div className={styles.overlay}></div>

			{!startOrbit && inView && (
				<div className={styles.bubbleContainer}>
					{contentPairs.map((pair, index) => (
						<div className={styles.bubbleRow} key={index}>
							<motion.div
								className={`${styles.bubble} ${styles.left}`}
								initial={{ x: "-100vw", opacity: 0 }}
								animate={inView ? { x: 0, opacity: 1 } : {}}
								transition={{
									delay: index * 1.2,
									type: "spring",
									stiffness: 60,
								}}
							>
								<div className={styles.staticIcon}>{pair.left.icon}</div>
								<span className={styles.bubbleText}>{pair.left.text}</span>
							</motion.div>

							<motion.div
								className={`${styles.bubble} ${styles.right}`}
								initial={{ x: "100vw", opacity: 0 }}
								animate={inView ? { x: 0, opacity: 1 } : {}}
								transition={{
									delay: index * 1.2,
									type: "spring",
									stiffness: 60,
								}}
							>
								<div className={styles.staticIcon}>{pair.right.icon}</div>
								<span className={styles.bubbleText}>{pair.right.text}</span>
							</motion.div>
						</div>
					))}
				</div>
			)}

			{startOrbit && (
				<div className={styles.orbitWrapper}>
					<div className={styles.orbitContainer}>
						{flatContent
							.filter((_, i) => i !== activeIndex)
							.map((item, i, arr) => {
								const angle = (360 / arr.length) * i;
								const x = radius * Math.cos((angle * Math.PI) / 180);
								const y = radius * Math.sin((angle * Math.PI) / 180);

								return (
									<motion.div
										className={styles.orbitBubble}
										key={item.text}
										animate={!isPaused ? { x, y } : false}
										transition={{ duration: 1, type: "spring", stiffness: 50 }}
									>
										<div className={styles.orbitIcon}>{item.icon}</div>
									</motion.div>
								);
							})}
					</div>

					{activeIndex !== null && (
						<motion.div
							className={styles.centerBubble}
							key={activeIndex}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							transition={{ type: "spring", stiffness: 100, damping: 10 }}
						>
							<div className={styles.centerIcon}>{flatContent[activeIndex].icon}</div>
							<h3 className={styles.centerTitle}>
								<Typewriter
									words={[flatContent[activeIndex].text]}
									loop={1}
									typeSpeed={typeSpeed}
									cursor={showCursor}
									onLoopDone={() => setShowCursor(false)}
								/>
							</h3>
							<p className={styles.centerCaption}>{flatContent[activeIndex].newtext}</p>
						</motion.div>
					)}
				</div>
			)}
		</section>
	);
}

