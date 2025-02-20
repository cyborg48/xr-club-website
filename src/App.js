/**
 * Definition of the component for the body of the site's main webpage.
 */
import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Lab from './pages/Lab';
import ScrollToTop from './ScrollToTop';
import Footer from './components/Footer'
import XR_CONSTANTS from './XR_CONSTANTS'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
  } from "react-router-dom";

function App() {

	// Function for getting the suffix of a date's day
	var getDateSuffix = function(num) {
		if (num > 3 && num < 21) {
			return 'th';
		} else if (num % 10 === 1) {
			return 'st';
		} else if (num % 10 === 2) {
			return 'nd';
		} else if (num % 10 === 3) {
			return 'rd';
		} else {
			return 'th';
		}
	}

	return (
		<div className="App">
			<Router>
				<ScrollToTop/>
				<a id="top"/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/events" element={<Events/>}/>
					<Route path="/lab" element={<Lab/>}/>
					<Route path="/projects" element={<Projects/>}/>
				</Routes>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
