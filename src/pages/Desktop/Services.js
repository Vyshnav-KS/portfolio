import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header/Header";
import { COLORS } from "../../styles/constants";
import mobApp from "../../assets/icons/mobApp.png";
import webDev from "../../assets/icons/webDev.png";
import uiDes from "../../assets/icons/uiDes.png";

const Services = () => {
	return (
		<div className={css(classes.root)}>
			<Header />
			<div className={css(classes.container)}>
				<span className={css(classes.title)}>WHAT I OFFER</span>
				<div className={css(classes.cards)}>
					<div className={css(classes.card_r)}>
						<div className={css(classes.card)}>
							<div>
								<img
									src={mobApp}
									alt="app dev icon"
									className={css(classes.icon)}
								/>
							</div>
							<span className={css(classes.card_title)}>
								MOBILE APP DEVELOPMENT
							</span>
						</div>
						<div className={css(classes.card)}>
							<div>
								<img
									src={webDev}
									alt="web dev icon"
									className={css(classes.icon)}
								/>
							</div>
							<span className={css(classes.card_title)}>WEB DEVELOPMENT</span>
						</div>
						<div className={css(classes.card)}>
							<div>
								<img
									src={uiDes}
									alt="figma design icon"
									className={css(classes.icon)}
								/>
							</div>
							<span className={css(classes.card_title)}>UI-UX DESIGN</span>
						</div>
					</div>
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
		textAlign: "center",
		marginLeft: "auto",
		marginRight: "auto",
		maxWidth: 1241,
		minHeight: 420,
		marginTop: 187,
		"@media (max-width: 1536px)": {
			width: 993,
			maxHeight: 336,
			marginTop: 150,
		},
		"@media (max-width: 1280px)": {
			width: 827,
			maxHeight: 280,
			marginTop: 125,
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
	cards: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	card_r: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 14,
		"@media (max-width: 1536px)": {
			marginBottom: 11.2,
		},
		"@media (max-width: 1280px)": {
			marginBottom: 9.3,
		},
	},
	card: {
		minWidth: 380,
		padding: "12px 18px",
		borderRadius: 8,
		minHeight: 251,
		marginRight: 14,
		backgroundColor: COLORS.primary_shade,
		justifyContent: "center",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		"@media (max-width: 1536px)": {
			minWidth: 304,
			padding: "9.5px 14.4px",
			borderRadius: 6.4,
			minHeight: 201,
			marginRight: 11.2,
		},
		"@media (max-width: 1280px)": {
			minWidth: 253,
			padding: "8px 12px",
			borderRadius: 5.3,
			minHeight: 167,
			marginRight: 9.3,
		},
	},
	card_title: {
		letterSpacing: ".05em",
		fontWeight: "bold",
		fontSize: 22,
		lineHeight: "33px",
		color: COLORS.white,
		"@media (max-width: 1536px)": {
			fontSize: 17.6,
			lineHeight: "26.4px",
		},
		"@media (max-width: 1280px)": {
			fontSize: 15,
			lineHeight: "22px",
		},
	},
	icon: {
		width: 65,
		height: 65,
		textAlign: "center",
		"@media (max-width: 1536px)": {
			width: 52,
			height: 52,
		},
		"@media (max-width: 1280px)": {
			width: 43,
			height: 43,
		},
	},
});

export default Services;
