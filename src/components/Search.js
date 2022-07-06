import React from "react";
import "../styles/Search.css";
import { useState } from "react";

function Search(props) {
	const [seach, setseach] = useState("");
	const [getUser, setUser] = useState({});
	let res;
	// user details
	const userData = [
		{
			email: "ashugaikwad11@gmail.com",
			name: "Ashish Gaikwad",
			address: "pune",
		},
		{
			email: "rohitgaikwad11@gmail.com",
			name: "rohit Gaikwad",
			address: "pune",
		},
		{
			email: "rahulgaikwad11@gmail.com",
			name: "rahul Gaikwad",
			address: "pune",
		},
	];

	const handleChnage = (e) => {
		setseach(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// check input fields are valide
		if (seach === "") {
			alert("please provide valide input fields");
			return;
		}

		// finding the user
		let getUser = userData.find((user) => user.name === seach);
		// if user is not exist
		if (!getUser) {
			alert("This name user is dont have linkedin Account");
			return;
		} else {
			setUser(getUser);
		}

		showDetails();
	};

	const showDetails = () => {
		document.getElementById("home").style.display = "flex";
	};

	console.log(getUser);

	return (
		<>
			<div id="search">
				<input
					type="search"
					placeholder="Search User..."
					id="search"
					name="search"
					required
					onChange={handleChnage}
				/>
			</div>

			{/* search button */}
			<button id="search__btn" type="submit" onClick={handleSubmit}>
				search
			</button>

			<div id="home">
				<div className="home__users">
					<div className="home__right">
						<img
							src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
							alt="user__avatar"
						/>
					</div>
					<div className="home__right">
						<h3>Name: {getUser.name}</h3>
						<span>Email: {getUser.email}</span>
						<p>Address: {getUser.address}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Search;
