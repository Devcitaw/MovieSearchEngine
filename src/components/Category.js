import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadCategory from "./LoadCategory";

const Category = ({ cat, catname }) => {
	const [peliculas, setpeliculas] = useState([]);
   
	useEffect(() => {
		const cargar = `${cat}&page=1}`;
		axios
			.get(`${cargar}`)
			.then((res) => {
				setpeliculas(res.data.results);
			})
			.catch((err) => alert(`Error! ${err}`));
	}, [cat]);

	return (
		<div className="wrapper">
			<div className="movies">
				<header className="movies__header">
					<h2 className="movies__title">{catname}</h2>
					<span className="movies__results"> {peliculas.results} results</span>
				</header>
				<LoadCategory cat={cat} />
			</div>
		</div>
	);
};

export default Category;
