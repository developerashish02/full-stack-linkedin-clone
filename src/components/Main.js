import React from "react";
import "../styles/Main.css";

function Main() {
	return (
		<div className="home">
			<div className="home__users">
				<div className="home__right">
					<img
						src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
						alt="user__avatar"
					/>
				</div>
				<div className="home__right">
					<h3>Name:</h3>
					<span>Email:</span>
					<p>Address:</p>
				</div>
			</div>
		</div>
	);
}

export default Main;
