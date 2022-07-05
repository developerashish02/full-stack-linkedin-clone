import "./App.css";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/login.css'; 

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
