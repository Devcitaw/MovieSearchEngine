import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Search = () => {
	const [value, setValue] = useState("");
	const history = useHistory();
	const handleChange = (event) => setValue(event.target.value);
	const handleKeyDown = (event) => {
		if (event.keyCode === 13 && value) {
			history.push(`/search/${value}`);
			console.log(value);
		}
	};

	return (
		<div className="header__search">
			<input
				className="header__search__input"
				type="text"
				placeholder="Search for a movie..."
				value={value}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<FiSearch className="header__search-icon" />
		</div>
	);
};

export default Search;
