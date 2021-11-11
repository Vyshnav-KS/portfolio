import { css, StyleSheet } from "aphrodite";
import React from "react";
import Dev from "../../assets/images/wdev.png";

const HomeMobile = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.name)}>Hey! I’m Vyshnav</div>
				<div className={css(styles.title)}>FRONT-END DEVELOPER</div>
				<div className={css(styles.image)}>
					<img src={Dev} alt="" className={css(styles.dev)} />
				</div>
				<div className={css(styles.description)}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quisque
					porttitor diam, pellentesque mauris turpis ut ullamcorper.
				</div>
				<button
					className={css(styles.button)}
					onTouchStart={() => {
						window.open(
							"https://drive.google.com/file/d/1eqYQHKm5lHeK3iwiW1l5kSIHLpZdmoB4/view?usp=sharing",
							"_blank"
						);
					}}
				>
					{" "}
					DOWNLOAD CV{" "}
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
	},
	name: {
		color: "#ffffff",
		fontSize: 18,
		lineHeight: "27px",
		marginTop: 28,
		fontWeight: 600,
	},
	title: {
		marginTop: 10,
		fontSize: 27,
		lineHeight: "42px",
		// letterSpacing: ".02em",
		fontWeight: "bold",
		color: "#00ECEC",
	},
	image: {
		textAlign: "center",
		alignItems: "center",
	},
	dev: {
		marginTop: 20,
		maxWidth: 314,
		maxHeight: 314,
	},
	description: {
		marginTop: 30,
		fontSize: 18,
		lineHeight: "26px",
		color: "#ffffff",
	},
	button: {
		background: "transparent",
		border: "1px solid #00ECEC",
		width: 154,
		height: 40,
		borderRadius: 8,
		fontSize: 13,
		marginTop: 24,
		marginBottom: 24,
		fontWeight: 500,
		textAlign: "center",
		alignItems: "center",
		color: "#ffffff",
	},
});

export default HomeMobile;
