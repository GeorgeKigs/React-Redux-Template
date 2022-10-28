import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useContextHooks";

const LOGIN_URL = "/user/login";

const Login = (props) => {
	const { setAuth } = useAuth();
	// define the input references
	const userRef = useRef();
	const pwdRef = useRef();

	// Define the user states
	const [user, setUser] = useState("");
	const [pwd, setPwd] = useState("");

	// set the state of error messages
	const [errmsg, setError] = useState("");
	const [success, setSuccess] = useState("");

	// navigation links
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setError("");
	}, [user, pwd]);

	const submitData = async (e) => {
		e.preventDefault();
		let user_data = user;
		let pwd_data = pwd;
		if (!user_data & !pwd_data) {
			setPwd("");
			return;
		}
		try {
			let results = await axios.post(
				LOGIN_URL,
				JSON.stringify({ user: user_data, password: pwd_data }),
				{
					headers: { "content-type": "application/json" },
					withCredentials: true,
				}
			);
			setAuth({ user: results?.user, access_token: results?.access_token });
			setSuccess(true);
			setPwd("");
			setUser("");

			navigate(from, { replace: true });
		} catch (error) {
			console.log(error.message);
			setError(error.message);
		}
	};
	return (
		<>
			<form onSubmit={submitData}>
				<div>
					<label htmlFor="email">email: </label>
					<input
						type="email"
						id="email"
						ref={props.userRef}
						onChange={(e) => setUser(e.target.value)}
						required
						autoComplete="off"
					/>
				</div>
				<div>
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						id="password"
						ref={props.pwdRef}
						onChange={(e) => setUser(e.target.value)}
						required
						autoComplete="off"
					/>
				</div>

				<button>Sign Up</button>
				<p>Don't have an account? </p>
				<Link to={"/registration"}>Sign Up</Link>
			</form>
		</>
	);
};

Login.propTypes = {};

export default Login;
