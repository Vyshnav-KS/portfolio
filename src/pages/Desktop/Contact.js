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
					<button className={css(classes.button)}>
						<img src={Mail} alt="mail icon" className={css(classes.btnIcon)} />

						<span className={css(classes.btntxt)}>say hello!</span>
					</button>
					<button className={css(classes.button)}>
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
	},
	title: {
		textAlign: "left",
		fontWeight: "bold",
		fontSize: 40,
		lineHeight: "60px",
		letterSpacing: "0.02em",
		color: COLORS.secondary,
	},
	description: {
		fontSize: 35,
		lineHeight: "43px",
		color: COLORS.white,
		marginTop: 21,
		marginBottom: 51,
	},
	btn: {
		display: "flex",
		flexDirection: "row",
	},
	button: {
		width: 353,
		height: 76,
		backgroundColor: COLORS.primary,
		border: `1px solid ${COLORS.secondary}`,
		borderRadius: 8,
		padding: 0,
		marginRight: 22,
		textAlign: "left",
		fontSize: 22,
		lineHeight: "33px",
		fontWeight: 500,
		color: COLORS.white,
		display: "flex",
		flexDirection: "row",
		cursor: "pointer",
	},
	btntxt: {
		margin: "auto",
		textAlign: "center",
	},
});

export default Contact;
