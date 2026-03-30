import React from "react";
import { css, StyleSheet } from "aphrodite";
import { COLORS } from "../../styles/constants";
import portfolioData from "../../data/portfolio.json";

const WorkMob = () => {
	const projects = portfolioData.projects;

	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.heading)}>PORTFOLIO</div>
				{projects.map((project, index) => {
					const url = project.github || project.link || null;
					const inner = (
						<>
							<div>
								<div className={css(styles.title)}>
									{project.name.toUpperCase()}
								</div>
								<div className={css(styles.subtitle)}>{project.subtitle}</div>
								<div className={css(styles.description)}>
									{project.description}
								</div>
							</div>
							<div className={css(styles.tech_row)}>
								{project.tech.map((t) => (
									<span key={t} className={css(styles.tech_chip)}>
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
							className={css(styles.card, styles.card_clickable)}
						>
							{inner}
						</a>
					) : (
						<div key={index} className={css(styles.card)}>
							{inner}
						</div>
					);
				})}
				<button
					className={css(styles.button)}
					onTouchStart={() => {
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
		rowGap: 14,
	},
	heading: {
		fontSize: 24,
		lineHeight: "36px",
		fontWeight: "bold",
		color: COLORS.secondary,
	},
	card: {
		background: COLORS.primary_shade,
		borderRadius: 8,
		padding: "12px 16px",
		display: "flex",
		flexDirection: "column",
		gap: 12,
		textDecoration: "none",
		color: "inherit",
	},
	card_clickable: {
		cursor: "pointer",
	},
	title: {
		fontSize: 18,
		lineHeight: "27px",
		fontWeight: 600,
		color: COLORS.secondary,
	},
	subtitle: {
		fontSize: 12,
		lineHeight: "18px",
		color: COLORS.secondary,
		opacity: 0.7,
		marginTop: 2,
	},
	description: {
		fontSize: 14,
		lineHeight: "22px",
		color: COLORS.white,
		marginTop: 6,
	},
	tech_row: {
		display: "flex",
		flexWrap: "wrap",
		gap: 6,
	},
	tech_chip: {
		fontSize: 11,
		lineHeight: "16px",
		color: COLORS.secondary,
		border: `1px solid ${COLORS.secondary}`,
		borderRadius: 4,
		padding: "2px 8px",
		opacity: 0.85,
	},
	button: {
		background: "transparent",
		border: `1px solid ${COLORS.secondary}`,
		width: 150,
		height: 40,
		borderRadius: 8,
		fontSize: 13,
		marginTop: 5,
		marginBottom: 24,
		fontWeight: 500,
		textAlign: "center",
		color: COLORS.white,
		cursor: "pointer",
	},
});

export default WorkMob;
