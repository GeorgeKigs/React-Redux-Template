import React from "react";
import PropTypes from "prop-types";

const ERROR_TYPES = {
	404: "NOT FOUND",
	503: "SERVER ERROR",
	403: "SERVER ERROR",
};

const Error = ({ errorPage }) => {
	return <div>Error due to {ERROR_TYPES(errorPage)}</div>;
};

Error.propTypes = {};

export default Error;
