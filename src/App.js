import "./App.css";
import Login from "./components/login";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/login.css";
import Search from "./components/Search";
import Form from "./components/Form";
function App() {
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

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Login userData={userData} />} />
					<Route exact path="/main" element={<Main />} />
					<Route
						exact
						path="/search"
						element={<Search userData={userData} key={userData.key} />}
					/>
					<Route exact path="/form" element={<Form />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
