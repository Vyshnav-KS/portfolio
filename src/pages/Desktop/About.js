import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header/Header";
import { COLORS } from "../../styles/constants";
import DP from "../../assets/images/dp-web.png";
import Github from "../../assets/icons/ghub.png";
import Instagram from "../../assets/icons/ig.png";
import Linkedin from "../../assets/icons/lin.png";
import Twitter from "../../assets/icons/twt.png";

const About = () => {
	return (
		<div className={css(classes.root)}>
			<Header />
			<div className={css(classes.container)}>
				<span className={css(classes.title)}>ABOUT</span>
				<div className={css(classes.contents)}>
					<div className={css(classes.image)}>
						<img src={DP} alt="dp" className={css(classes.dp)} />
					</div>
					<div>
						<span className={css(classes.description)}>
							I'm an{" "}
							<span className={css(classes.hilted)}>
								engineering aspirant student
							</span>{" "}
							who is enthusiastic about technology. <br />
							Currently, I'm doing my Bachelor's degree, specializing in
							Computer Science and Engineering at{" "}
							<span
								className={css(classes.hilted)}
								onClick={() => {
									window.open("https://cusat.ac.in/", "_blank");
								}}
							>
								CUSAT
							</span>
							. I have proficient skills in
							<span className={css(classes.hilted)}>
								{" "}
								React, Gatsby, Node, Flutter, Python, HTML/CSS,
							</span>{" "}
							etc. <br />
							<br /> I'm always happy to{" "}
							<span className={css(classes.hilted)}> connect</span> with new
							people to share my experiences and also learn from them.
						</span>
					</div>
				</div>
				<div className={css(classes.icons)}>
					<img
						src={Github}
						alt="github"
						className={css(classes.icon)}
						onClick={() => {
							window.open("https://github.com/Vyshnav-KS", "_blank");
						}}
					/>
					<img
						src={Instagram}
						alt="instagram"
						className={css(classes.icon)}
						onClick={() => {
							window.open("https://www.instagram.com/____vyshnav_", "_blank");
						}}
					/>
					<img
						src={Linkedin}
						alt="linkedin"
						className={css(classes.icon)}
						onClick={() => {
							window.open(
								"https://www.linkedin.com/in/vyshnav-ks-a5b5351a5",
								"_blank"
							);
						}}
					/>
					<img
						src={Twitter}
						alt="twitter"
						className={css(classes.icon)}
						onClick={() => {
							window.open("https://twitter.com/VyshnavKS2", "_blank");
						}}
					/>
				</div>
			</div>
		</div>
	);
};

const classes = StyleSheet.create({
	root: {
		display: "flex",
		flexDirection: "column",
	},
	container: {
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
		marginLeft: "auto",
		marginRight: "auto",
		maxWidth: 1241,
		minHeight: 420,
		marginTop: 170,
		"@media (max-width: 1536px)": {
			maxWidth: 993,
			minHeight: 336,
			marginTop: 136,
		},
		"@media (max-width: 1280px)": {
			maxWidth: 827,
			minHeight: 280,
			marginTop: 113,
		},
	},
	title: {
		textAlign: "left",
		fontWeight: "bold",
		fontSize: 40,
		lineHeight: "60px",
		letterSpacing: "0.02em",
		color: COLORS.secondary,
		"@media (max-width: 1536px)": {
			fontSize: 32,
			lineHeight: "48px",
		},
		"@media (max-width: 1280px)": {
			fontSize: 27,
			lineHeight: "40px",
		},
	},
	contents: {
		display: "flex",
		flexDirection: "row",
		marginTop: 18,
		"@media (max-width: 1536px)": {
			marginTop: 15,
		},
		"@media (max-width: 1280px)": {
			marginTop: 12,
		},
	},
	image: {
		maxWidth: 271,
		maxHeight: 297,
		marginRight: 47,
		"@media (max-width: 1536px)": {
			maxWidth: 217,
			maxHeight: 238,
			marginRight: 38,
		},
		"@media (max-width: 1280px)": {
			maxWidth: 181,
			maxHeight: 198,
			marginRight: 31,
		},
	},
	description: {
		fontSize: 27,
		fontWeight: 500,
		lineHeight: "40px",
		letterSpacing: "0.03em",
		color: COLORS.white,
		"@media (max-width: 1536px)": {
			fontSize: 22,
			lineHeight: "32px",
		},
		"@media (max-width: 1280px)": {
			fontSize: 18,
			lineHeight: "27px",
		},
	},
	icons: {
		display: "flex",
		maxWidth: 271,
		justifyContent: "space-between",
		marginTop: 49,
		"@media (max-width: 1536px)": {
			maxWidth: 217,
			marginTop: 39,
		},
		"@media (max-width: 1280px)": {
			maxWidth: 181,
			marginTop: 33,
		},
	},
	icon: {
		width: 50,
		height: 50,
		cursor: "pointer",
		"@media (max-width: 1536px)": {
			width: 40,
			height: 40,
		},
		"@media (max-width: 1280px)": {
			width: 33,
			height: 33,
		},
	},
	dp: {
		borderRadius: 8,
		marginTop: 10,
		width: 297,
		height: 297,
		"@media (max-width: 1536px)": {
			borderRadius: 6.4,
			marginTop: 8,
			width: 238,
			height: 238,
		},
		"@media (max-width: 1280px)": {
			borderRadius: 5.3,
			marginTop: 6.6,
			width: 198,
			height: 198,
		},
	},
	hilted: {
		color: COLORS.secondary,
		cursor: "pointer",
	},
});

export default About;
