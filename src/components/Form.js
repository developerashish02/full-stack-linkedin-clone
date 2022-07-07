import React from "react";
import "../styles/login.css";
import "../styles/Form.css";
import { useState } from "react";

function Form() {
	// get data
	const [getData, setData] = useState([]);
	const [user, setuser] = useState({
		name: "",
		email: "",
		address: "",
		phoneNumber: 1234567890,
	});

	// handle change
	const handleChange = (event) => {
		setuser({ ...user, [event.target.name]: event.target.value });
	};

	// handle click
	const handleClick = (e) => {
		e.preventDefault();

		// checking valide credential
		if (
			user.name === "" ||
			user.email === "" ||
			user.phoneNumber === "" ||
			user.phoneNumber === ""
		) {
			alert("The input fields not shoud be empty ");
			return;
			// create user
		} else {
			setData((getData) => [...getData, user]);
		}

		// reset the all values
		setuser({
			name: "",
			email: "",
			address: "",
			phoneNumber: "",
		});
	};

	// handle delete feture

	const handleDelete = (email__id) => {};

	return (
		<div id="form" style={style}>
			<h2 style={{ margin: "auto" }}>User Details</h2>
			<form id="login__from">
				<div className="login__container">
					<input
						type="text"
						placeholder="User Name"
						onChange={handleChange}
						name="name"
						value={user.name}
						required
					/>
					<input
						type="email"
						placeholder="User Email"
						onChange={handleChange}
						name="email"
						value={user.email}
						required
					/>
					<input
						type="text"
						placeholder="User Address"
						onChange={handleChange}
						name="address"
						value={user.address}
						required
					/>

					<input
						type="number"
						placeholder="User Number"
						name="phoneNumber"
						onChange={handleChange}
						value={user.phoneNumber}
					/>
				</div>

				<button id="login__btn" type="submit" onClick={handleClick}>
					Submit
				</button>
			</form>
			{/* render all user */}

			<div className="form__user">
				{getData.map((item) => {
					return (
						<div className="card" key={item.email}>
							<div className="container">
								<h4>
									<b>{item.name}</b>
								</h4>
								<p>{item.email}</p>

								<span>{item.address}</span>

								<p>{item.phoneNumber}</p>
							</div>

							<div className="form__buttons">
								<i
									className="fa-solid fa-circle-minus"
									onClick={() => {
										handleDelete(item);
									}}
								></i>
								<i className="fa-solid fa-pen-to-square"></i>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

const style = {
	height: "350px",
	width: "400px",
	display: "flex",
	position: "absolute",
	left: "35%",
	top: "10%",
	flexDirection: "column",
};

export default Form;
