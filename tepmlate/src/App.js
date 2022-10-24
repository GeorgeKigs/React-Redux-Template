import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Index from "./pages/Index";
import userContext from "./context/user.context";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/">
					<userContext>
						<Route path="/" element={<Index />} />
						<Route path="/login" element={<Login />} />
						<Route path="/registration" element={<Registration />} />
					</userContext>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
