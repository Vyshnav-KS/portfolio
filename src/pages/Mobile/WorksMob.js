import React from "react";
import { css, StyleSheet } from "aphrodite";

const WorkMob = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.heading)}>PORTFOLIO</div>
				<div className={css(styles.card)}>
					<div className={css(styles.title)}>APP NAME</div>
					<div className={css(styles.description)}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
						lectus amet egestas feugiat
					</div>
					<div className={css(styles.link)}>know more</div>
				</div>
				<div className={css(styles.card)}>
					<div className={css(styles.title)}>APP NAME</div>
					<div className={css(styles.description)}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
						lectus amet egestas feugiat
					</div>
					<div className={css(styles.link)}>know more</div>
				</div>
				<div className={css(styles.card)}>
					<div className={css(styles.title)}>APP NAME</div>
					<div className={css(styles.description)}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet
						lectus amet egestas feugiat
					</div>
					<div className={css(styles.link)}>know more</div>
				</div>
				<button className={css(styles.button)}>MORE PROJECTS</button>
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
		padding: "8px 18px",
	},
	title: {
		fontSize: 20,
		lineHeight: "30px",
		fontWeight: 600,
		color: "#00ECEC",
	},
	description: {
		fontSize: 17,
		lineHeight: "25px",
		color: "#ffffff",
	},
	link: {
		fontSize: 17,
		color: "#00ECEC",
		lineHeight: "25px",
		fontWeight: 500,
	},
	button: {
		background: "transparent",
		border: "1px solid #00ECEC",
		width: 150,
		height: 40,
		borderRadius: 8,
		fontSize: 13,
		marginTop: 5,
		marginBottom: 24,
		fontWeight: 500,
		textAlign: "center",
		alignItems: "center",
		color: "#ffffff",
	},
});

export default WorkMob;
