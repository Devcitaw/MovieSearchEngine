import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import { Link } from "react-router-dom";
import axios from "axios";

const CategoryPreview = ({ cat, catname, paginaActual, buttonLink }) => {
	const [peliculas, setpeliculas] = useState([]);

	useEffect(() => {
		const cargar = `${cat}&page=${paginaActual}`;
		axios
			.get(`${cargar}`)
			.then((res) => {
				const titulos = res.data.results;
				setpeliculas(titulos.slice(0, 5));
			})
			.catch((err) => alert(`Error! ${err}`));
	}, []);

	return (
		<div className="wrapper">
			<div className="movies">
				<header className="movies__header">
					<h2 className="movies__title">{catname}</h2>
					<Link to={buttonLink} className="nav__link">
						View All →
					</Link>
				</header>
				<ul className="movies__list categorypreview">
					{peliculas.map((u) => (
						<li className="movies__item">
							<Link to={`/movie/${u.id}`} className="movies-item__link">
								<Movies pic={u.poster_path} title={u.original_title} />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CategoryPreview;
