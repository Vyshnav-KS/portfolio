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
							<span className={css(classes.card_title)}>PORTFOLIO WEBSITE</span>
							<span className={css(classes.card_desc)}>
								A portfolio website created using react js which shows resume,
								works, services, contact info and about me.
							</span>
							<button
								className={css(classes.card_button)}
								onClick={() => {
									window.open(
										"https://github.com/Vyshnav-KS/portfolio",
										"_blank"
									);
								}}
							>
								KNOW MORE
							</button>
						</div>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>DAILY NEWS</span>
							<span className={css(classes.card_desc)}>
								A flutter app that provides latest news which users can filter
								corresponding to their favourite categories.
							</span>
							<button
								className={css(classes.card_button)}
								onClick={() => {
									window.open(
										"https://github.com/Vyshnav-KS/DailyNews",
										"_blank"
									);
								}}
							>
								KNOW MORE
							</button>
						</div>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>
								HACKCLUB CUCEK WEBSITE
							</span>
							<span className={css(classes.card_desc)}>
								Worked on front-end part of Hack Club CUCEK community website.
							</span>
							<button
								className={css(classes.card_button)}
								onClick={() => {
									window.open("https://github.com/hackclub-cucek/v4", "_blank");
								}}
							>
								KNOW MORE
							</button>
						</div>
					</div>
					<div className={css(classes.card_r)}>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>MOVIEZONE</span>
							<span className={css(classes.card_desc)}>
								A web app build using react js which user can search their
								favourite movies or tv shows, see trailers, cast information,
								posters, etc.
							</span>
							<button
								className={css(classes.card_button)}
								onClick={() => {
									window.open(
										"https://github.com/Vyshnav-KS/Moviezone",
										"_blank"
									);
								}}
							>
								KNOW MORE
							</button>
						</div>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>DAILYDO</span>
							<span className={css(classes.card_desc)}>
								A todo flutter mobile application where users can create an
								account and add daily tasks. Users can also login and logout.
							</span>
							<button
								className={css(classes.card_button)}
								onClick={() => {
									window.open(
										"https://github.com/Vyshnav-KS/Daily-Do",
										"_blank"
									);
								}}
							>
								KNOW MORE
							</button>
						</div>
						<div className={css(classes.card)}>
							<span className={css(classes.card_title)}>QUOTE BOT</span>
							<span className={css(classes.card_desc)}>
								A discord bot which replies encouraging quotes when a sad word
								is said by user. Build using nodejs and express js.
							</span>
							<button
								className={css(classes.card_button)}
								onClick={() => {
									window.open(
										"https://github.com/Vyshnav-KS/Quote-Bot",
										"_blank"
									);
								}}
							>
								KNOW MORE
							</button>
						</div>
					</div>
				</div>
				<button
					className={css(classes.button)}
					onClick={() => {
						window.open(
							"https://github.com/Vyshnav-KS?tab=repositories",
							"_blank"
						);
					}}
				>
					MORE PROJECTS
				</button>
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
		"@media (max-width: 1536px)": {
			width: 993,
			maxHeight: 336,
			marginTop: 128,
		},
		"@media (max-width: 1280px)": {
			width: 827,
			maxHeight: 280,
			marginTop: 107,
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
		minWidth: 404,
		padding: "12px 18px",
		borderRadius: 8,
		maxHeight: 178,
		marginRight: 14,
		backgroundColor: COLORS.primary_shade,
		justifyContent: "space-between",
		display: "flex",
		flexDirection: "column",
		textAlign: "left",
		"@media (max-width: 1536px)": {
			minWidth: 323,
			padding: "9.6px 14.4px",
			borderRadius: 6.4,
			maxHeight: 142,
			marginRight: 11.2,
		},
		"@media (max-width: 1280px)": {
			minWidth: 269,
			padding: "8px 12px",
			borderRadius: 5.3,
			maxHeight: 119,
			marginRight: 9.3,
		},
	},
	card_title: {
		fontSize: 22,
		lineHeight: "33px",
		fontWeight: 600,
		color: COLORS.secondary,
		"@media (max-width: 1536px)": {
			fontSize: 18,
			lineHeight: "26.4px",
		},
		"@media (max-width: 1280px)": {
			fontSize: 15,
			lineHeight: "22px",
		},
	},
	card_desc: {
		fontSize: 17,
		lineHeight: "25px",
		color: COLORS.white,
		"@media (max-width: 1536px)": {
			fontSize: 13.6,
			lineHeight: "20px",
		},
		"@media (max-width: 1280px)": {
			fontSize: 11,
			lineHeight: "17px",
		},
	},
	card_button: {
		width: 155,
		borderRadius: 8,
		fontSize: 16,
		lineHeight: "24px",
		marginTop: 10,
		height: 38,
		border: `1px solid ${COLORS.secondary}`,
		backgroundColor: COLORS.primary_shade,
		color: COLORS.white,
		fontWeight: "500",
		cursor: "pointer",
		"@media (max-width: 1536px)": {
			width: 124,
			borderRadius: 6.4,
			fontSize: 13,
			lineHeight: "19px",
			marginTop: 8,
			height: 30,
		},
		"@media (max-width: 1280px)": {
			width: 103,
			borderRadius: 5.3,
			fontSize: 11,
			lineHeight: "16px",
			marginTop: 7,
			height: 26,
		},
	},
	button: {
		width: 194,
		lineHeight: "30px",
		borderRadius: 8,
		fontSize: 20,
		height: 51,
		backgroundColor: COLORS.primary,
		border: `1px solid ${COLORS.secondary}`,
		fontWeight: 500,
		color: COLORS.white,
		cursor: "pointer",
		"@media (max-width: 1536px)": {
			width: 155,
			lineHeight: "24px",
			borderRadius: 6.4,
			fontSize: 16,
			height: 41,
		},
		"@media (max-width: 1280px)": {
			width: 129,
			lineHeight: "20px",
			borderRadius: 5.3,
			fontSize: 13,
			height: 34,
		},
	},
});

export default Works;
