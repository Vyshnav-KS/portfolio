import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../../components/Header/Header";
import { COLORS } from "../../styles/constants";
import portfolioData from "../../data/portfolio.json";

const Works = () => {
	const projects = portfolioData.projects;

	return (
		<div className={css(classes.root)}>
			<Header />
			<div className={css(classes.container)}>
				<span className={css(classes.title)}>PORTFOLIO</span>
				<div className={css(classes.card_r)}>
					{projects.map((project, index) => {
						const url = project.github || project.link || null;
						const inner = (
							<>
								<div className={css(classes.card_top)}>
									<span className={css(classes.card_title)}>
										{project.name.toUpperCase()}
									</span>
									<span className={css(classes.card_subtitle)}>
										{project.subtitle}
									</span>
									<span className={css(classes.card_desc)}>
										{project.description}
									</span>
								</div>
								<div className={css(classes.tech_row)}>
									{project.tech.map((t) => (
										<span key={t} className={css(classes.tech_chip)}>
											{t}
										</span>
									))}
								</div>
							</>
						);

						return url ? (
							<a
								key={index}
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className={css(classes.card, classes.card_clickable)}
							>
								{inner}
							</a>
						) : (
							<div key={index} className={css(classes.card)}>
								{inner}
							</div>
						);
					})}
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
		marginTop: 100,
		"@media (max-width: 1536px)": {
			width: 993,
			marginTop: 80,
		},
		"@media (max-width: 1280px)": {
			width: 827,
			marginTop: 67,
		},
	},
	title: {
		textAlign: "left",
		fontWeight: "bold",
		fontSize: 40,
		lineHeight: "60px",
		letterSpacing: "0.02em",
		color: COLORS.secondary,
		marginBottom: 16,
		"@media (max-width: 1536px)": {
			fontSize: 32,
			lineHeight: "48px",
			marginBottom: 12,
		},
		"@media (max-width: 1280px)": {
			fontSize: 27,
			lineHeight: "40px",
			marginBottom: 10,
		},
	},
	card_r: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 24,
		gap: 16,
		"@media (max-width: 1536px)": {
			marginBottom: 19,
			gap: 12,
		},
		"@media (max-width: 1280px)": {
			marginBottom: 16,
			gap: 10,
		},
	},
	card: {
		padding: "16px 18px",
		borderRadius: 8,
		backgroundColor: COLORS.primary_shade,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		textAlign: "left",
		textDecoration: "none",
		color: "inherit",
		"@media (max-width: 1536px)": {
			padding: "12px 14px",
			borderRadius: 6.4,
		},
		"@media (max-width: 1280px)": {
			padding: "10px 12px",
			borderRadius: 5.3,
		},
	},
	card_clickable: {
		cursor: "pointer",
		":hover": {
			outline: `1px solid ${COLORS.secondary}`,
		},
	},
	card_top: {
		display: "flex",
		flexDirection: "column",
		gap: 4,
		marginBottom: 12,
		"@media (max-width: 1536px)": {
			gap: 3,
			marginBottom: 10,
		},
		"@media (max-width: 1280px)": {
			gap: 2,
			marginBottom: 8,
		},
	},
	card_title: {
		fontSize: 18,
		lineHeight: "27px",
		fontWeight: 600,
		color: COLORS.secondary,
		"@media (max-width: 1536px)": {
			fontSize: 15,
			lineHeight: "22px",
		},
		"@media (max-width: 1280px)": {
			fontSize: 13,
			lineHeight: "19px",
		},
	},
	card_subtitle: {
		fontSize: 13,
		lineHeight: "19px",
		color: COLORS.secondary,
		opacity: 0.7,
		"@media (max-width: 1536px)": {
			fontSize: 11,
			lineHeight: "16px",
		},
		"@media (max-width: 1280px)": {
			fontSize: 10,
			lineHeight: "14px",
		},
	},
	card_desc: {
		fontSize: 14,
		lineHeight: "22px",
		color: COLORS.white,
		marginTop: 6,
		"@media (max-width: 1536px)": {
			fontSize: 12,
			lineHeight: "18px",
			marginTop: 4,
		},
		"@media (max-width: 1280px)": {
			fontSize: 10,
			lineHeight: "15px",
			marginTop: 3,
		},
	},
	tech_row: {
		display: "flex",
		flexWrap: "wrap",
		gap: 6,
		"@media (max-width: 1536px)": {
			gap: 5,
		},
		"@media (max-width: 1280px)": {
			gap: 4,
		},
	},
	tech_chip: {
		fontSize: 11,
		lineHeight: "16px",
		color: COLORS.secondary,
		border: `1px solid ${COLORS.secondary}`,
		borderRadius: 4,
		padding: "2px 8px",
		opacity: 0.85,
		"@media (max-width: 1536px)": {
			fontSize: 10,
			padding: "1px 6px",
		},
		"@media (max-width: 1280px)": {
			fontSize: 9,
			padding: "1px 5px",
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
		marginBottom: 40,
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
