import React from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
	const userData = [
		{
			email: "ashugaikwad11@gmail.com",
			password: "ashish1",
		},
		{
			email: "rohitgaikwad11@gmail.com",
			password: "rohit1",
		},
		{
			email: "rahulgaikwad11@gmail.com",
			password: "rahul1",
		},
	];

	// credentail
	const [credential, setcredential] = useState({
		email: "",
		password: "",
	});

	// Navigate to signup page if user is not registed
	let navigate = useNavigate();
	// handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(credential);

		setcredential({
			email: "",
			password: "",
		});

		for (let index = 0; index < userData.length; index++) {
			if (
				userData[index].email === credential.email &&
				userData[index].password === credential.password
			) {
				navigate("/form");
				return;
			} else {
				alert("Pls Enter Valide Credential");
				return;
			}
		}
	};

	// handle image
	const onChnage = (e) => {
		setcredential({ ...credential, [e.target.name]: e.target.value });
	};
	return (
		<div id="login">
			<h1 style={{ marginTop: "50px", textAlign: "center" }}>Login Form </h1>
			<form id="login__form">
				<div className="login__container">
					<input
						type="email"
						placeholder="Email"
						required
						id="email"
						name="email"
						value={credential.email}
						onChange={onChnage}
					/>
					<input
						type="password"
						placeholder="Password"
						required
						id="password"
						name="password"
						onChange={onChnage}
						value={credential.password}
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
