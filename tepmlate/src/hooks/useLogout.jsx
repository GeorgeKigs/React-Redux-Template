import axios from "../utils/apiRequests";
import { useAuth } from "./useContextHooks";

export default useLogout = () => {
	const { setAuth } = useAuth();
	const logout = async () => {
		setAuth({});
		try {
			const response = await axios("/logout", { withCredentials: true });
		} catch (error) {
			console.log(error);
		}
	};
	return logout;
};
