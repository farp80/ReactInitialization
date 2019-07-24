import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));

let links = [
	{
		link: "http://www.google.com",
		text: "Link to google.com"
	},
	{
		link: "http://www.facebook.com",
		text: "Link to facebook.com"
	},
	{
		link: "http://www.amazon.com",
		text: "Link to amazon.com"
	}
];

const listItems = links.map((value, index) => (
	<li key={index.toString()} className="nav-item">
		<a className="nav-link" href={value.link}>
			{value.text}
		</a>
	</li>
));

const unsortedList = <ul>{listItems}</ul>;
ReactDOM.render(unsortedList, document.querySelector("#myDiv"));
