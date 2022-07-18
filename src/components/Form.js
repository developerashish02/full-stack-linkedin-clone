import React from "react";
import "../styles/login.css";
import "../styles/Form.css";
import { useState, useEffect } from "react";
import validator from "validator";
import { v4 as uuidv4 } from "uuid";
import api from "../api/user";
import "../styles/Main.css";

function Form() {
	const [mode, setMode] = useState("submit");
	const [oldData, setoldData] = useState("");
	const [user, setuser] = useState({
		name: "",
		email: "",
		address: "",
		phoneNumber: "",
	});

	let [item, setItem] = useState([]);
	// fetching all users
	const getingAllusers = async () => {
		const response = await api.get("/users");
		return response.data;
	};

	// handle delete
	const handleDelete = async (id) => {
		const response = await api.delete(`/users/${id}`);
		item = item.filter((item) => item.id !== id);
		setItem(item);
	};

	// fetch all users
	useEffect(() => {
		const getAllUser = async () => {
			const allUser = await getingAllusers();
			if (allUser) {
				setItem(allUser);
			}
		};
		getAllUser();
	}, []);

	// handle change
	const handleChange = (event) => {
		setuser({ ...user, [event.target.name]: event.target.value });
	};

	// handle click
	const handleClick = async (e) => {
		e.preventDefault();
		if (mode === "submit") {
			// validate email
			if (!validator.isEmail(user.email)) {
				alert("Enter valid Email!");
				return;
			}
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
				// create user with id
				const userWithId = {
					...user,
					id: uuidv4(),
				};

				const response = await api.post("/users", userWithId);
				// setuser([...user, response.data]);
				setItem([...item, response.data]);
			}
		}
		// edite mode
		else {
			let newNote = item;
			for (let index = 0; index < item.length; index++) {
				let element = newNote[index];
				if (element.id === oldData.id) {
					newNote[index].name = user.name;
					newNote[index].email = user.email;
					newNote[index].address = user.address;
					newNote[index].phoneNumber = user.phoneNumber;
					break;
				}
			}

			const res = newNote.find((item) => item.id === oldData.id);
			const response = await api.put(`/users/${res.id}`, res);
			const { name, email, id } = response.data;
			setItem(
				item.map((item) => {
					return item.id === id ? { ...response.data } : item;
				})
			);
			// setting mode to submit 
			setMode("submit");
		}
		// reset the all values
		setuser({
			name: "",
			email: "",
			address: "",
			phoneNumber: "",
		});
	};

	// handle edite notes
	const editeNotes = (editeObj) => {
		setuser({
			name: editeObj.name,
			email: editeObj.email,
			address: editeObj.address,
			phoneNumber: editeObj.phoneNumber,
		});

		setMode("edite");
		setoldData(editeObj);
	};

	return (
		<>
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

				<div className="home">
					<div className="form__user">
						{item.map((item) => {
							return (
								<div className="card" key={item.id}>
									<div className="container">
										<h4>
											<b>{item.name}</b>
										</h4>
										<p>{item.email}</p>
										<p>{item.phoneNumber}</p>
										<p>{item.address}</p>
									</div>

									<div className="form__buttons">
										<i
											className="fa-solid fa-circle-minus"
											onClick={() => {
												handleDelete(item.id);
											}}
										></i>
										<i
											className="fa-solid fa-pen-to-square"
											onClick={() => {
												editeNotes(item);
											}}
										></i>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
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
