import { StyleSheet, css } from "aphrodite";
import React from "react";
import Header from "../components/Header/Header";
import Developer from "../assets/images/dev.png";
import { COLORS } from "../styles/constants";

const Home = () => {
	return (
		<div className={css(classes.root)}>
			<Header />
			<div className={css(classes.container)}>
				<div className={css(classes.leftContainer)}>
					<span className={css(classes.name)}>Hey! I'm Vyshnav</span>
					<span className={css(classes.title)}>FRONT-END DEVELOPER</span>
					<span className={css(classes.description)}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
						quisque porttitor diam, pellentesque mauris turpis
					</span>
					<button className={css(classes.button)}>DOWNLOAD CV</button>
				</div>
				<div className={css(classes.image)}>
					<img src={Developer} alt="Developer Image" />
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
		flexDirection: "row",
		marginLeft: "auto",
		marginRight: "auto",
		maxWidth: 1241,
		maxHeight: 420,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 200,
		justifyContent: "space-between",
	},
	leftContainer: {
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
		maxWidth: 714,
	},
	name: {
		fontSize: 29,
		fontWeight: 600,
		lineHeight: "43px",
		color: COLORS.white,
		marginBottom: 20,
	},
	title: {
		fontSize: 58,
		fontWeight: "bold",
		lineHeight: "87px",
		letterSpacing: "0.02em",
		color: COLORS.secondary,
		marginBottom: 20,
	},
	description: {
		fontSize: 28,
		lineHeight: "43px",
		color: COLORS.white,
		marginBottom: 45,
	},
	button: {
		width: 264,
		height: 60,
		backgroundColor: COLORS.primary,
		color: COLORS.white,
		border: `1px solid ${COLORS.secondary}`,
		borderRadius: 8,
		fontSize: 20,
		fontWeight: 500,
		lineHeight: "30px",
		letterSpacing: "0.0125em",
		cursor: "pointer",
	},
	image: {
		marginLeft: 70,
	},
});

export default Home;
