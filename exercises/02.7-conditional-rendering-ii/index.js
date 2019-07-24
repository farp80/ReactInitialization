import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// add the green inside this function
const Alert = props => {
	let alerts = ["alert"];
	switch (props.color) {
		case "red":
			alerts.push("alert-danger");
			break;

		case "orange":
			alerts.push("alert-warning");
			break;

		case "green":
			alerts.push("alert-success");
			break;

		default:
			alert("Invalid color, you can only specify: red or orange (for now)");
			break;
	}

	let alertClasses = alerts.join(" ");

	return (
		<div className={alertClasses} role="alert">
			{props.text}
		</div>
	);
};

Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.querySelector("#myDiv")
);
