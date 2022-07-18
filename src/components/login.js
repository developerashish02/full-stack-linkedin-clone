import React, { useEffect } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/user";
const Login = () => {
	const [userData, setUserData] = useState("");
	const getUserData = async () => {
		const response = await api.get("/users");
		return response.data;
	};

	// credentail
	const [credential, setcredential] = useState({
		email: "",
	});

	useEffect(() => {
		const userVerifield = async () => {
			const response = await getUserData();
			if (response) {
				setUserData(response);
			}
		};

		userVerifield();
	}, []);

	// Navigate to signup page if user is not registed
	let navigate = useNavigate();
	// handle submit
	const handleSubmit = (e) => {
		console.log("Credential", credential);
		console.log(userData);
		e.preventDefault();
		for (let index = 0; index < userData.length; index++) {
			if (userData[index].email === credential.email) {
				navigate("/form");
				return;
			} else {
				alert("Pls Enter Valide Credential");
				setcredential({
					email: "",
				});
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
					<button id="login__btn" type="submit" onClick={handleSubmit}>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
