import React from "react";
import "../styles/signup.css";
import validator from "validator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = (props) => {
	const [checkEmail, setcheckEmail] = useState("");
	let navigate = useNavigate();
	// user details
	const userData = [
		{
			email: "ashugaikwad11@gmail.com",
			name: "Ashish Gaikwad",
			address: "pune",
			key: 1,
		},
		{
			email: "rohitgaikwad11@gmail.com",
			name: "rohit Gaikwad",
			address: "pune",
			key: 2,
		},
		{
			email: "rahulgaikwad11@gmail.com",
			name: "rahul Gaikwad",
			address: "pune",
			key: 3,
		},
	];

	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validator.isEmail(checkEmail)) {
			alert("Provide Valide email");
			return;
		}

		const res = userData.find((obj) => obj.email === checkEmail);
		console.log(res);

		// redirect main page
		if (res) {
			alert("This email is alredy register ");
			navigate("/");
			return;
		} else {
			navigate("/form");
			return;
		}
	};

	// handle change
	const handleChange = (e) => {
		setcheckEmail(e.target.value);
	};

	return (
		<div className="container">
			<form>
				<h1 style={{ marginTop: "100px" }}>Sign Up </h1>
				<div id="signup__form">
					<input
						type="text"
						placeholder="Email"
						required
						onChange={handleChange}
						name="email"
					/>
					<button type="submit" className="login__btn" onClick={handleSubmit}>
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};
