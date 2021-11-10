import React from "react";
import { COLORS } from "../../styles/constants";
import DP from "../../assets/images/dp.png";
import Github from "../../assets/icons/ghub.png";
import Instagram from "../../assets/icons/ig.png";
import Linkedin from "../../assets/icons/lin.png";
import { StyleSheet, css } from "aphrodite";
import Twitter from "../../assets/icons/twt.png";

const AboutMob = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.container)}>
				<div className={css(styles.heading)}>ABOUT ME</div>
				<img src={DP} alt="" className={css(styles.dp)} />
				<div className={css(styles.description)}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
					scelerisque egestas at risus convallis turpis. Aliquet urna eget
					commodo turpis dictum nunc. Risus sapien, consequat, pellentesque
					auctor nisl purus porta suspendisse. Tellus feugiat.
				</div>
				<div className={css(styles.icons)}>
					<img src={Instagram} alt="" className={css(styles.icon)} />
					<img src={Github} alt="" className={css(styles.icon)} />
					<img src={Linkedin} alt="" className={css(styles.icon)} />
					<img src={Twitter} alt="" className={css(styles.icon)} />
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
		rowGap: 22,
	},
	heading: {
		fontSize: 24,
		lineHeight: "36px",
		fontWeight: "bold",
		color: COLORS.secondary,
	},
	dp: {
		width: 230,
		height: 260,
	},
	description: {
		fontSize: 18,
		lineHeight: "27px",
		fontWeight: 500,
		letterSpacing: "0.02em",
		color: COLORS.white,
	},
	icons: {
		display: "flex",
		flexDirection: "row",
		columnGap: 15,
	},
	icon: {
		width: 30,
		height: 30,
	},
});

export default AboutMob;
