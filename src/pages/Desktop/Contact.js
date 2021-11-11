import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header/Header";
import { COLORS } from "../../styles/constants";
import Mail from "../../assets/icons/mail.png";
import Call from "../../assets/icons/call.png";

const Contact = () => {
	return (
		<div className={css(classes.root)}>
			<Header />
			<div className={css(classes.container)}>
				<span className={css(classes.title)}>GET IN TOUCH</span>
				<span className={css(classes.description)}>
					I like to create things with fun, open-minded people. Feel free to say
					hello!
				</span>
				<div className={css(classes.btn)}>
					<button
						className={css(classes.button)}
						onClick={() => {
							window.open("mailto: vyshnavks85@gmail.com", "_blank");
						}}
					>
						<img src={Mail} alt="mail icon" className={css(classes.btnIcon)} />

						<span className={css(classes.btntxt)}>say hello!</span>
					</button>
					<button
						className={css(classes.button)}
						onClick={() => {
							window.open("https://wa.me/+919072048028", "_blank");
						}}
					>
						<img src={Call} alt="call icon" className={css(classes.btnIcon)} />
						<span className={css(classes.btntxt)}>give a buzz</span>
					</button>
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
		marginLeft: "auto",
		marginRight: "auto",
		maxWidth: 1241,
		maxHeight: 420,
		justifyContent: "center",
		alignItems: "left",
		marginTop: 200,
		"@media (max-width: 1536px)": {
			width: 993,
			maxHeight: 336,
			marginTop: 160,
		},
		"@media (max-width: 1280px)": {
			width: 827,
			maxHeight: 280,
			marginTop: 133,
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
	description: {
		fontSize: 35,
		marginBottom: 51,
		marginTop: 21,
		lineHeight: "43px",
		color: COLORS.white,
		"@media (max-width: 1536px)": {
			fontSize: 28,
			marginBottom: 41,
			marginTop: 17,
			lineHeight: "34px",
		},
		"@media (max-width: 1280px)": {
			fontSize: 23,
			marginBottom: 34,
			marginTop: 14,
			lineHeight: "29px",
		},
	},
	btn: {
		display: "flex",
		flexDirection: "row",
	},
	button: {
		width: 353,
		borderRadius: 8,
		marginRight: 22,
		height: 76,
		fontSize: 22,
		lineHeight: "33px",
		backgroundColor: COLORS.primary,
		border: `1px solid ${COLORS.secondary}`,
		padding: 0,
		textAlign: "left",
		fontWeight: 500,
		color: COLORS.white,
		display: "flex",
		flexDirection: "row",
		cursor: "pointer",
		"@media (max-width: 1536px)": {
			width: 282,
			borderRadius: 6.4,
			marginRight: 18,
			height: 61,
			fontSize: 18,
			lineHeight: "26px",
		},
		"@media (max-width: 1280px)": {
			width: 235,
			borderRadius: 5.3,
			marginRight: 15,
			height: 51,
			fontSize: 15,
			lineHeight: "22px",
		},
	},
	btntxt: {
		margin: "auto",
		textAlign: "center",
	},
	btnIcon: {
		height: 76,
		width: 106,
		"@media (max-width: 1536px)": {
			height: 61,
			width: 85,
		},
		"@media (max-width: 1280px)": {
			height: 51,
			width: 71,
		},
	},
});

export default Contact;
