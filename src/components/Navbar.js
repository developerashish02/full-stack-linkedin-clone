import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
	return (
		<div id="Navbar">
			<div className="Navbar__img">
				<img
					src="https://www.socialmediabutterflyblog.com/wp-content/uploads/sites/567/2019/02/linkedin.jpg"
					alt="Navbar-logo"
				/>
			</div>

			<div className="Navbar__login">
				<ul>
					<Link to="/">
						<li className="navbar__list">Home</li>
					</Link>
					<Link to="/signup">
						<li className="navbar__list">Sign Up</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
