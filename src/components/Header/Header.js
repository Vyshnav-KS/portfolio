import React from "react";
import { StyleSheet, css } from "aphrodite";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className={css(classes.header)}>
			<div className={css(classes.headerList)}>
				<NavLink
					className={css(classes.headerComp)}
					activeClassName={css(classes.navActive)}
					exact
					value="home"
					to="/"
				>
					HOME
				</NavLink>
				<NavLink
					className={css(classes.headerComp)}
					activeClassName={css(classes.navActive)}
					value="works"
					to="/works"
					// onClick={Navclick}
				>
					WORKS
				</NavLink>
				<NavLink
					className={css(classes.headerComp)}
					activeClassName={css(classes.navActive)}
					value="services"
					to="/services"
				>
					SERVICES
				</NavLink>
				<NavLink
					className={css(classes.headerComp)}
					activeClassName={css(classes.navActive)}
					vlaue="contact"
					to="/contact"
				>
					CONTACT
				</NavLink>
				<NavLink
					className={css(classes.headerComp)}
					activeClassName={css(classes.navActive)}
					value="about"
					to="/about"
				>
					ABOUT
				</NavLink>
			</div>
		</div>
	);
};

const classes = StyleSheet.create({
	header: {
		textAlign: "center",
		marginTop: 78,
		"@media (max-width: 1536px)": {
			marginTop: 63,
		},
		"@media (max-width: 1280px)": {
			marginTop: 52,
		},
	},
	headerList: {
		display: "flex",
		flexDirection: "row",
		marginLeft: "auto",
		marginRight: "auto",
		maxWidth: 520,
		alignItems: "center",
		justifyContent: "space-between",
		"@media (max-width: 1536px)": {
			maxWidth: 416,
		},
		"@media (max-width: 1280px)": {
			maxWidth: 347,
		},
	},
	headerComp: {
		color: "#585858",
		textDecoration: "none",
		":hover": {
			color: "#ffffff",
			fontWeight: "bold",
		},
		"@media (max-width: 1536px)": {
			fontSize: 14.5,
		},
		"@media (max-width: 1280px)": {
			fontSize: 12,
		},
	},
	navActive: {
		color: "#ffffff",
		fontWeight: "bold",
	},
});

export default Header;
