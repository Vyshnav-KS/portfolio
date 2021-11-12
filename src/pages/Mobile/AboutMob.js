import React from "react";
import { COLORS } from "../../styles/constants";
import DP from "../../assets/images/dp-web.png";
import Github from "../../assets/icons/ghub.png";
import Instagram from "../../assets/icons/ig.png";
import Linkedin from "../../assets/icons/lin.png";
import { StyleSheet, css } from "aphrodite";
import Twitter from "../../assets/icons/twt.png";

const AboutMob = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.heading)}>ABOUT ME</div>
				<img src={DP} alt="icons" className={css(styles.dp)} />
				<div className={css(styles.description)}>
					I'm an{" "}
					<span className={css(styles.hilted)}>
						engineering aspirant student
					</span>{" "}
					who is enthusiastic about technology. <br />
					<br />
					Currently, I'm doing my Bachelor's degree, specializing in Computer
					Science and Engineering at{" "}
					<span
						className={css(styles.hilted)}
						onClick={() => {
							window.open("https://cusat.ac.in/", "_blank");
						}}
					>
						CUSAT
					</span>
					. I have proficient skills in
					<span className={css(styles.hilted)}>
						{" "}
						React, Gatsby, Node, Flutter, Python, HTML/CSS,
					</span>{" "}
					etc. <br />
					<br /> I'm always happy to{" "}
					<span className={css(styles.hilted)}> connect</span> with new people
					to share my experiences and also learn from them.
				</div>
				<div className={css(styles.icons)}>
					<img
						src={Github}
						alt="icons"
						className={css(styles.icon)}
						onTouchStart={() => {
							window.open("https://github.com/Vyshnav-KS", "_blank");
						}}
					/>
					<img
						src={Instagram}
						alt="icons"
						className={css(styles.icon)}
						onTouchStart={() => {
							window.open("https://www.instagram.com/____vyshnav_", "_blank");
						}}
					/>

					<img
						src={Linkedin}
						alt="icons"
						className={css(styles.icon)}
						onTouchStart={() => {
							window.open(
								"https://www.linkedin.com/in/vyshnav-ks-a5b5351a5",
								"_blank"
							);
						}}
					/>
					<img
						src={Twitter}
						alt="icons"
						className={css(styles.icon)}
						onTouchStart={() => {
							window.open("https://twitter.com/VyshnavKS2", "_blank");
						}}
					/>
				</div>
			</div>
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
		alignItems: "center",
		marginLeft: 20,
		marginRight: 20,
	},
	container: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		rowGap: 22,
	},
	heading: {
		fontSize: 24,
		lineHeight: "36px",
		fontWeight: "bold",
		color: COLORS.secondary,
	},
	dp: {
		width: 260,
		height: 260,
		borderRadius: 8,
	},
	description: {
		fontSize: 18,
		lineHeight: "27px",
		fontWeight: 500,
		letterSpacing: "0.02em",
		color: COLORS.white,
	},
	icons: {
		display: "flex",
		flexDirection: "row",
		columnGap: 15,
	},
	icon: {
		width: 30,
		height: 30,
	},
	hilted: {
		color: COLORS.secondary,
		cursor: "pointer",
	},
});

export default AboutMob;
