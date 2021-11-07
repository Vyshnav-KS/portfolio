import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header/Header";
import { COLORS } from "../../styles/constants";

const Works = () => {
	return (
		<div className={css(classes.root)}>
			<Header />
			<div className={css(classes.container)}>
				<span className={css(classes.title)}>PORTFOLIO</span>
				<div className={css(classes.cards)}>
					<div className={css(classes.card_r)}>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>APP NAME</span>
							<span className={css(classes.card_desc)}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
								lectus amet egestas feugiat
							</span>
							<button className={css(classes.card_button)}>KNOW MORE</button>
						</div>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>APP NAME</span>
							<span className={css(classes.card_desc)}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
								lectus amet egestas feugiat
							</span>
							<button className={css(classes.card_button)}>KNOW MORE</button>
						</div>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>APP NAME</span>
							<span className={css(classes.card_desc)}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
								lectus amet egestas feugiat
							</span>
							<button className={css(classes.card_button)}>KNOW MORE</button>
						</div>
					</div>
					<div className={css(classes.card_r)}>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>APP NAME</span>
							<span className={css(classes.card_desc)}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
								lectus amet egestas feugiat
							</span>
							<button className={css(classes.card_button)}>KNOW MORE</button>
						</div>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>APP NAME</span>
							<span className={css(classes.card_desc)}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
								lectus amet egestas feugiat
							</span>
							<button className={css(classes.card_button)}>KNOW MORE</button>
						</div>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>APP NAME</span>
							<span className={css(classes.card_desc)}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
								lectus amet egestas feugiat
							</span>
							<button className={css(classes.card_button)}>KNOW MORE</button>
						</div>
					</div>
				</div>
				<button className={css(classes.button)}>MORE PROJECTS</button>
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
		marginTop: 160,
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
		maxWidth: 404,
		maxHeight: 178,
		marginRight: 14,
		backgroundColor: COLORS.primary_shade,
		borderRadius: 8,
		justifyContent: "space-between",
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
		padding: "12px 18px",
	},
	card_title: {
		fontSize: 22,
		lineHeight: "33px",
		fontWeight: 600,
		color: COLORS.secondary,
	},
	card_desc: {
		fontSize: 17,
		lineHeight: "25px",
		color: COLORS.white,
	},
	card_button: {
		width: 155,
		height: 38,
		border: `1px solid ${COLORS.secondary}`,
		borderRadius: 8,
		backgroundColor: COLORS.primary_shade,
		color: COLORS.white,
		fontSize: 16,
		lineHeight: "24px",
		fontWeight: "500",
		cursor: "pointer",
		marginTop: 10,
	},
	button: {
		width: 194,
		height: 51,
		backgroundColor: COLORS.primary,
		border: `1px solid ${COLORS.secondary}`,
		borderRadius: 8,
		fontSize: 20,
		fontWeight: 500,
		lineHeight: "30px",
		color: COLORS.white,
		cursor: "pointer",
	},
});

export default Works;
