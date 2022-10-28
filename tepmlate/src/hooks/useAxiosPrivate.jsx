import { axiosPrivate } from "../utils/apiRequests";
import { useEffect } from "react";
import useRefreshToken from "./useRefresh";
import { useAuth } from "./useContextHooks";

const useAxios = () => {
	const refresh = useRefreshToken();
	const { auth } = useAuth();
	useEffect(() => {
		const requestInterceptor = axiosPrivate.interceptors.request.use(
			(config) => {
				if (config.headers["Authorization"]) {
					config.headers["Authorization"] = `Bearer ${auth?.accesstoken}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);
		const responseInterceptors = axiosPrivate.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error?.config;
				if (error?.response?.status === 403 && !prevRequest?.sent) {
					prevRequest.sent = true;
					const newToken = await refresh();
					prevRequest.headers["Authorization"] = `Bearer ${newToken}`;
					return axiosPrivate(prevRequest);
				}
				return Promise.reject(error);
			}
		);
		return () => {
			axiosPrivate.interceptors.response.eject(responseInterceptors);
			axiosPrivate.interceptors.request.eject(requestInterceptor);
		};
	}, [auth, refresh]);
	return axiosPrivate;
};
