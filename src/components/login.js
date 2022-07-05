import React from "react";
import "../styles/login.css";
import { useState } from "react";

const Login = () => {
	// handle submit
	const handleSubmit = (e) => {
        e.preventDefault();
    };
    // handle image 
    const onChnage = () => {

    }
	return (
		<div id="login">
			<form id="login__form" onSubmit={handleSubmit}>
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
					<button id="login__btn" type="submit">
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
