import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className={css(classes.header)}>
			<div className={css(classes.headerList)}>
				<Link className={css(classes.headerComp)} value="home" to="/">
					HOME
				</Link>
				<Link
					className={css(classes.headerComp)}
					value="works"
					to="/works"
					// onClick={Navclick}
				>
					WORKS
				</Link>
				<Link
					className={css(classes.headerComp)}
					value="services"
					to="/services"
				>
					SERVICES
				</Link>
				<Link className={css(classes.headerComp)} vlaue="contact" to="/contact">
					CONTACT
				</Link>
				<Link className={css(classes.headerComp)} value="about" to="/about">
					ABOUT
				</Link>
			</div>
		</div>
	);
};

const classes = StyleSheet.create({
	header: {
		textAlign: "center",
		marginTop: 78,
	},
	headerList: {
		display: "flex",
		flexDirection: "row",
		marginLeft: "auto",
		marginRight: "auto",
		maxWidth: 520,
		alignItems: "center",
		justifyContent: "space-between",
	},
	headerComp: {
		color: "#585858",
		textDecoration: "none",
		":hover": {
			color: "#ffffff",
			fontWeight: "bold",
		},
	},
});

export default Header;
