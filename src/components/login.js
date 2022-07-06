import React from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
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
	const [email, setEmail] = useState("");
	console.log(userData);
	let navigate = useNavigate();
	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === "") {
			alert("email not should be empty");
			return;
		}

		let checkExist = userData.find((e) => e.email === email);
		console.log(checkExist);
		if (!checkExist) {
			navigate("/main");
			return;
		} else {
			alert("This email is alredy exist");
		}
	};
	// handle image
	const onChnage = (e) => {
		setEmail(e.target.value);
	};
	return (
		<div id="login">
			<form id="login__form">
				<div className="login__container">
					<h1>Login Form </h1>
					<input
						type="email"
						placeholder="Email"
						required
						id="email"
						name="email"
						onChange={onChnage}
					/>
					<button id="login__btn" type="submit" onClick={handleSubmit}>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
