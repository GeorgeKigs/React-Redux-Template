import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<h1>MainPage</h1>} />
			</Routes>
		</div>
	);
}

export default App;
