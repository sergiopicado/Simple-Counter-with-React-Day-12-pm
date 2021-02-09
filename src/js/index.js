//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
function Simplecounter(props) {
	return (
		<div className="allElements">
			<div className="clockIcon">
				<i className="far fa-clock fa-8x"></i>
			</div>
			<div className="fourth singleElement">{props.digitFour % 10}</div>
			<div className="third singleElement">{props.digitThree % 10}</div>
			<div className="second singleElement">{props.digitTwo % 10}</div>
			<div className="first singleElement">{props.digitOne % 10}</div>
		</div>
	);
}
Simplecounter.propTypes = {
	digitFour: PropType.number,
	digitThree: PropType.number,
	digitTwo: PropType.number,
	digitOne: PropType.number
};
let counter = 0;
setInterval(function() {
	const fourth = Math.floor(counter / 1000);
	const third = Math.floor(counter / 100);
	const second = Math.floor(counter / 10);
	const first = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<Simplecounter
			digitOne={first}
			digitTwo={second}
			digitThree={third}
			digitFour={fourth}
		/>,

		document.querySelector("#app")
	);
}, 1000);
