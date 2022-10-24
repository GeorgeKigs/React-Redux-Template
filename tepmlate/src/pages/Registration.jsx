import react, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "../utils/apiRequests";

const REGISTRATION_URL = "/users/register";
const Registration = (props) => {
	// define the input references
	const userRef = useRef();
	const pwdRef = useRef();

	// Define the user states
	const [user, setUser] = useState("");
	const [pwd, setPwd] = useState("");
	const [c_pwd, setCPwd] = useState("");

	// set the state of error messages
	const [errmsg, setError] = useState("");
	const [success, setSuccess] = useState("");

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setError("");
	}, [user, pwd, c_pwd]);

	const submitData = async (e) => {
		e.preventDefault();
		let user_data = user;
		let pwd_data = pwd;
		if (!user_data & !pwd_data) {
			return;
		}
		try {
			await axios.post(
				REGISTRATION_URL,
				JSON.stringify({ user: user_data, password: pwd_data }),
				{
					headers: { "content-type": "application/json" },
					withCredentials: true,
				}
			);
			setSuccess(true);
		} catch (error) {
			console.log(error.message);
			setError(error.message);
		}
	};
	return (
		<>
			<form onSubmit={submitData}>
				<div>
					<label htmlFor="username">Username: </label>
					<input
						type="text"
						id="username"
						ref={userRef}
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
						ref={pwdRef}
						onChange={(e) => setUser(e.target.value)}
						required
						autoComplete="off"
					/>
				</div>
				<div>
					<label htmlFor="c_password">Confirm Password: </label>
					<input
						type="text"
						id="c_password"
						ref={userRef}
						onChange={(e) => setUser(e.target.value)}
						required
						autoComplete="off"
					/>
				</div>
				<button>Sign Up</button>
				<p>Do you have an account? </p>
				<Link to={"/login"}>Sign In</Link>
			</form>
		</>
	);
};

Registration.propTypes = {};

export default Registration;
