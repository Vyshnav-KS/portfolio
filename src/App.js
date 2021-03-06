import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Desktop/Home";
import "./App.css";
import { Switch } from "react-router";
import About from "./pages/Desktop/About";
import Works from "./pages/Desktop/Works";
import Services from "./pages/Desktop/Services";
import Contact from "./pages/Desktop/Contact";
import HomeMob from "./pages/Mobile/HomeMob";
import useDeviceType from "./hooks/deviceType";
import WorksMob from "./pages/Mobile/WorksMob";
import NavBar from "./pages/Mobile/NavBar";
import ServicesMob from "./pages/Mobile/ServicesMob";
import ContactMob from "./pages/Mobile/ContactMob";
import AboutMob from "./pages/Mobile/AboutMob";

function App() {
	const deviceType = useDeviceType();
	if (deviceType === "mobile") {
		return (
			<BrowserRouter>
				<div className="app">
					<NavBar />
					<Switch>
						<Route path="/" component={HomeMob} exact></Route>
						<Route path="/works" component={WorksMob} exact></Route>
						<Route path="/services" component={ServicesMob} exact></Route>
						<Route path="/contact" component={ContactMob} exact></Route>
						<Route path="/about" component={AboutMob} exact></Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	} else {
		return (
			<BrowserRouter>
				<div className="app">
					<Switch>
						<Route path="/" component={Home} id="home" exact></Route>
						<Route path="/works" component={Works}></Route>
						<Route path="/services" component={Services}></Route>
						<Route path="/contact" component={Contact}></Route>
						<Route path="/about" component={About}></Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
