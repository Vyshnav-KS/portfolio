import React from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../components/Header/Header";

const Contact = () => {
	return (
		<div className={css(classes.root)}>
			<Header />{" "}
		</div>
	);
};

const classes = StyleSheet.create({
	root: {},
});

export default Contact;
