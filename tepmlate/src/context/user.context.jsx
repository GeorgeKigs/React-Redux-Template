import { useState, createContext } from "react";

export const UserProvider = createContext(null);

const userContext = ({ children }) => {
	const [Auth, setAuth] = userState({});
	const [userState, setUserCart] = useState({});

	const values = {
		userState,
		setUserCart,
		Auth,
		setAuth,
	};
	return (
		<UserProvider.Provider value={values}>{children}</UserProvider.Provider>
	);
};

export default userContext;
