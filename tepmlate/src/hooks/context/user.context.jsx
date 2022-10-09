import { useState, createContext } from "react";

const User = createContext(null);

const userContext = ({ children }) => {
	const user = {};
	const [userState, setUserCart] = useState(user);

	const values = {
		userState,
		setUserCart,
	};
	return <User.Provider value={values}>{children}</User.Provider>;
};

export default userContext;
