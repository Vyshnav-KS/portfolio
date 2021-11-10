import { css, StyleSheet } from "aphrodite";
import React from "react";
import mobApp from "../../assets/icons/mobApp.png";
import webDev from "../../assets/icons/webDev.png";
import uiDes from "../../assets/icons/uiDes.png";

const ServicesMob = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.heading)}>WHAT I OFFER</div>
				<div className={css(styles.card)}>
					<img src={webDev} alt="icon" className={css(styles.icon)} />
					<div className={css(styles.title)}>WEB DEVELOPMENT</div>
				</div>
				<div className={css(styles.card)}>
					<img src={mobApp} alt="icon" className={css(styles.icon)} />
					<div className={css(styles.title)}>MOBILE APP DEVELOPMENT</div>
				</div>
				<div className={css(styles.card)}>
					<img src={uiDes} alt="icon" className={css(styles.icon)} />
					<div className={css(styles.title)}>UI/UX DESIGN</div>
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
		rowGap: 17,
	},
	heading: {
		fontSize: 24,
		lineHeight: "36px",
		fontWeight: "bold",
		color: "#00ECEC",
	},
	card: {
		background: "rgba(88, 88, 88, 0.31)",
		borderRadius: 8,
		minHeight: 180,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		width: 45,
		height: 45,
	},
	title: {
		fontWeight: 600,
		fontSize: 20,
		lineHeight: "30px",
		color: "#ffffff",
		letterSpacing: "0.02em",
	},
});

export default ServicesMob;
