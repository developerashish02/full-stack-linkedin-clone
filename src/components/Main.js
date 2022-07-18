import React, { useEffect, useState } from "react";
import "../styles/Main.css";
import api from "../api/user";
import Form from "./Form";

function Main() {
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

	return (
		<>
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
											// editeNotes(item);
										}}
									></i>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Main;
