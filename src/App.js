import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header/Header";
import { Switch } from "react-router";
import About from "./pages/About";
import Works from "./pages/Works";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route path="/" component={Home} exact></Route>
					<Route path="/works" component={Works}></Route>
					<Route path="/services" component={Services}></Route>
					<Route path="/contact" component={Contact}></Route>
					<Route path="/about" component={About}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
