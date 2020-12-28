import React from "react";

const HomeHeader = (props) => {
	return (
		<header className="home__header">
			<div className="home__header-wrap">
				<h1 className="home__header-title">{props.headername}</h1>
			</div>
		</header>
	);
};

export default HomeHeader;
