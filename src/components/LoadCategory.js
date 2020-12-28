import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import axios from "axios";
import { Link } from "react-router-dom";

const LoadCategory = ({ cat }) => {
	const [pagina, setPagina] = useState(1);
	const [peliculas, setPeliculas] = useState([]);
    console.log("🚀 ~ file: LoadCategory.js ~ line 9 ~ LoadCategory ~ peliculas", peliculas)
   	
	const getMovies = (addNews =true) => {
		const cargar = `${cat}&page=${pagina}`;
		axios
			.get(`${cargar}`)
			.then((res) => {
				if(addNews){
					setPeliculas([...peliculas,...res.data.results]);
				}else{
					setPeliculas([...res.data.results]);
				}
			
			})
			.catch((err) => alert(`Error! ${err}`));
	} 
	useEffect(() => {
		getMovies();
	}, [pagina]);

	useEffect(() => {
		getMovies(false);
	}, [cat]); 
	
	useEffect(() => {
		getMovies();
	}, []);

	const loadMore = () => {
		setPagina(pagina + 1);
	};

	return (
		<ul className="movies__list">
			{/* {list.map((a) =>
				a.map((u) => (
					<li className="movies__item">
						<Link to={`/movie/${u.id}`} className="movies-item__link">
							<Movies pic={u.poster_path} title={u.original_title} />
						</Link>
					</li>
				))
			)} */}

			{peliculas.map((u) => (
				<li className="movies__item">
					<Link to={`/movie/${u.id}`} className="movies-item__link">
						<Movies pic={u.poster_path} title={u.original_title} />
					</Link>
				</li>
			))}

			<div class="movies__nav">
				<button className="morebutton" onClick={loadMore}>
					Load more
				</button>
			</div>
		</ul>
	);
};

export default LoadCategory;
