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
	},
	title: {
		textAlign: "left",
		fontWeight: "bold",
		fontSize: 40,
		lineHeight: "60px",
		letterSpacing: "0.02em",
		color: COLORS.secondary,
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
	},
	card: {
		minWidth: 380,
		minHeight: 251,
		marginRight: 14,
		backgroundColor: COLORS.primary_shade,
		borderRadius: 8,
		justifyContent: "center",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		padding: "12px 18px",
	},
	card_title: {
		letterSpacing: ".05em",
		fontWeight: "bold",
		fontSize: 22,
		lineHeight: "33px",
		color: COLORS.white,
	},
	icon: {
		width: 65,
		height: 65,
		textAlign: "center",
	},
});

export default Services;
