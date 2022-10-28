import { useState, createContext } from "react";

export const UserProvider = createContext(null);

const userContext = ({ children }) => {
	const [auth, setAuth] = useState({});
	const [userState, setUserCart] = useState({});

	const values = {
		userState,
		setUserCart,
		auth,
		setAuth,
	};
	return (
		<UserProvider.Provider value={values}>{children}</UserProvider.Provider>
	);
};

export default userContext;
