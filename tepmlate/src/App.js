import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Index from "./pages/Index";
import userContext from "./context/user.context";
import { RequireAuth } from "./components/RequireAuth";
import PersistentLogin from "./components/Persistent";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/">
					<Route path="/" element={<Index />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
				</Route>
				<Route element={<PersistentLogin />}>
					<Route element={<RequireAuth allowdRoles={["admin"]} />}>
						<Route path="/Admin" element={<Index />} />
					</Route>
					<Route element={<RequireAuth allowdRoles={["organization"]} />}>
						<Route path="/Organization" element={<Login />} />
					</Route>
					<Route element={<RequireAuth allowdRoles={["developer"]} />}>
						<Route path="/Developer" element={<Login />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
