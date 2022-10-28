import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useContextHooks";

export const RequireAuth = ({ allowdRoles }) => {
	const { auth } = useAuth();
	const location = useLocation();
	// check for the roles passed
	return auth?.user ? (
		<Outlet />
	) : (
		<Navigate to={"/login"} state={{ from: location }} replace />
	);
};
