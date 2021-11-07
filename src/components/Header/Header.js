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
	navActive: {
		color: "#ffffff",
		fontWeight: "bold",
	},
});

export default Header;
