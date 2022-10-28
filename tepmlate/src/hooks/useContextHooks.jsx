import { useContext } from "react";
import { UserProvider } from "../context/user.context";

export const useAuth = () => {
	return useContext(UserProvider);
};
