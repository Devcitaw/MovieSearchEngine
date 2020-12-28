import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
	return (
		<Link to={props.link.buttonLink} className="nav__link">
			<div className="nav__link-wrap">
				<div className="nav__link-icon">
					<div className="button__image">{props.link.buttonImage}</div>
				</div>
				<div className="button__text">
					<span className="nav__link-title">{props.link.buttonText}</span>
				</div>
			</div>
		</Link>
	);
};

export default Button;
