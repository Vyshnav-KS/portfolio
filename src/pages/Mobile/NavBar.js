import { css, StyleSheet } from "aphrodite";
import React, { useState } from "react";
import Menu from "../../assets/icons/menubar.png";
import MenuCross from "../../assets/icons/cross.png";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../styles/constants";

const NavBar = () => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.navMenuBar)}>
				<img
					src={Menu}
					alt=""
					className={css(styles.menuBar)}
					onTouchStart={showSidebar}
				/>
				<div className={css(styles.rootNav)}>
					<nav
						className={
							sidebar ? css(styles.navMenuActive) : css(styles.navMenu)
						}
					>
						<div className={css(styles.menuBarCross)}>
							<img
								src={MenuCross}
								alt=""
								className={css(styles.cross)}
								onTouchStart={showSidebar}
							/>
						</div>
						<div className={css(styles.links)}>
							<NavLink
								exact
								to="/"
								activeClassName={css(styles.linkActive)}
								className={css(styles.link)}
								onClick={showSidebar}
							>
								HOME
							</NavLink>
							<NavLink
								to="/works"
								activeClassName={css(styles.linkActive)}
								className={css(styles.link)}
								onClick={showSidebar}
							>
								WORKS
							</NavLink>
							<NavLink
								to="/services"
								activeClassName={css(styles.linkActive)}
								className={css(styles.link)}
								onClick={showSidebar}
							>
								SERVICES
							</NavLink>
							<NavLink
								to="/contact"
								activeClassName={css(styles.linkActive)}
								className={css(styles.link)}
								onClick={showSidebar}
							>
								CONTACT
							</NavLink>
							<NavLink
								to="/about"
								activeClassName={css(styles.linkActive)}
								className={css(styles.link)}
								onClick={showSidebar}
							>
								ABOUT
							</NavLink>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
		display: "flex",
		justifyContent: "flex-end",
	},
	navMenuBar: {
		margin: 20,
	},
	navMenu: {
		overflowY: "hidden",
		top: 0,
		height: "100vh",
		width: "100%",
		right: "-100%",
		position: "fixed",
		transition: "450ms",
	},
	navMenuActive: {
		top: 0,
		zIndex: 1,
		right: 0,
		transition: "350ms",
		height: "100vh",
		width: "100%",
		position: "fixed",
		backgroundColor: COLORS.secondary,
	},
	menuBarCross: {
		display: "flex",
		justifyContent: "flex-end",
		margin: 20,
	},
	links: {
		display: "flex",
		flexDirection: "column",
		marginTop: 103,
		rowGap: 35,
		fontSize: 25,
		fontWeight: 500,
		justifyContent: "center",
		alignItems: "center",
	},
	link: {
		color: COLORS.primary,
		textDecoration: "none",
	},
	linkActive: {
		fontWeight: "bold",
		textDecoration: "none",
	},
});

export default NavBar;
