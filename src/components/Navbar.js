import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "../styles.css";
import Logo from "../assets/iso_blanco_transparent.svg";

const Navbar = (props) => {
	const [classStatus, setClassStatus] = useState(false);
	const changeClass = () => {
		setClassStatus(!classStatus);
	};
	return (
		<nav className="nav">
			<Link to="/" className="nav__logo">
				<img src={Logo} alt="Ada Logo" className="nav__logo-img" />
			</Link>
			<div className="nav__hamburger" onClick={() => changeClass()}>
				<div className="bar" />
				<div className="bar" />
				<div className="bar" />
			</div>

			<ul className={classStatus ? "nav__list--visible" : "nav__list"}>
				{props.links.map((l) => (
					<li className="nav__item" onClick={() => changeClass()}>
						<Button link={l} />
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
