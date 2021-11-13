import React from "react";
import Mail from "../../assets/icons/mail.png";
import { StyleSheet, css } from "aphrodite";
import Call from "../../assets/icons/call.png";
import { COLORS } from "../../styles/constants";

const ContactMob = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.heading)}>GET IN TOUCH</div>
				<div className={css(styles.contents)}>
					<div className={css(styles.description)}>
						I like to create things with fun, open-minded people. Feel free to
						say hello!
					</div>
					<div
						className={css(styles.button)}
						onTouchStart={() => {
							window.open("mailto: vyshnavks85@gmail.com", "_blank");
						}}
					>
						<img src={Mail} alt="" className={css(styles.icon)} />
						<div className={css(styles.btnTxt)}>say hello!</div>
					</div>
					<div
						className={css(styles.button)}
						onTouchStart={() => {
							window.open("https://wa.me/+919072048028", "_blank");
						}}
					>
						<img src={Call} alt="" className={css(styles.icon)} />
						<div className={css(styles.btnTxt)}>give a buzz</div>
					</div>
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
		color: COLORS.secondary,
	},
	contents: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		rowGap: 23,
		marginTop: "10%",
	},
	description: {
		fontSize: 36,
		lineHeight: "43px",
		fontWeight: 500,
		color: COLORS.white,
	},
	button: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		border: `1px solid ${COLORS.secondary}`,
		borderRadius: 8,
		width: 177,
		fontSize: 13,
		fontWeight: 500,
		color: COLORS.white,
		columnGap: 27,
	},
	icon: {
		width: 53,
		height: 40,
	},
});

export default ContactMob;
