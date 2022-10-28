import axios from "../utils/apiRequests";
import { useAuth } from "./useContextHooks";

const useRefreshToken = () => {
	const { setAuth } = useAuth();

	const refresh = async () => {
		const response = await axios.get("/refresh", {
			withCredentials: true,
		});
		setAuth((prev) => {
			return {
				...prev,
				roles: response.data.roles,
				accessToken: response.data.accessToken,
			};
		});
		return response.data.accessToken;
	};

	return refresh;
};

export default useRefreshToken;
