import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../components/Header/Header";
import { COLORS } from "../styles/constants";
import DP from "../assets/images/dp.png";
import Github from "../assets/icons/ghub.png";
import Instagram from "../assets/icons/ig.png";
import Linkedin from "../assets/icons/lin.png";
import Twitter from "../assets/icons/twt.png";

const About = () => {
	return (
		<div className={css(classes.root)}>
			<Header />
			<div className={css(classes.container)}>
				<span className={css(classes.title)}>ABOUT</span>
				<div className={css(classes.contents)}>
					<div className={css(classes.image)}>
						<img src={DP} alt="dp" />
					</div>
					<div>
						<span className={css(classes.description)}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. At at
							nullam sed pharetra phasellus sapien. Scelerisque cras vestibulum
							rutrum non eget volutpat. Vitae pharetra interdum erat sed
							pulvinar lacus, purus amet. Dictum ac, non gestas. Ultrices
							eleifend quis interdum nulla convallis. Morbi non amet aliquet..
							Morbi non amet aliquet interdum nulla convallis. Morbi non ame.
						</span>
					</div>
				</div>
				<div className={css(classes.icons)}>
					<img src={Github} alt="github" className={css(classes.icon)} />
					<img src={Instagram} alt="instagram" className={css(classes.icon)} />
					<img src={Linkedin} alt="linkedin" className={css(classes.icon)} />
					<img src={Twitter} alt="twitter" className={css(classes.icon)} />
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
	},
	title: {
		textAlign: "left",
		fontWeight: "bold",
		fontSize: 40,
		lineHeight: "60px",
		letterSpacing: "0.02em",
		color: COLORS.secondary,
	},
	contents: {
		display: "flex",
		flexDirection: "row",
		marginTop: 18,
	},
	image: {
		maxWidth: 271,
		maxHeight: 297,
		marginRight: 47,
	},
	description: {
		fontSize: 27,
		fontWeight: 500,
		lineHeight: "40px",
		letterSpacing: "0.03em",
		color: COLORS.white,
	},
	icons: {
		display: "flex",
		maxWidth: 271,
		justifyContent: "space-between",
		marginTop: 49,
	},
	icon: {
		width: 50,
		height: 50,
	},
});

export default About;
