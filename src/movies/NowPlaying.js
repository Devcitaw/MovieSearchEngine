import React from "react";
import Category from "../components/Category";

const NowPlaying = () => {
	return (
		<section className="main">
			<Category
				cat="https://api.themoviedb.org/3/movie/now_playing?api_key=12083d05b92b51e4bd659c8b36f81253"
				catname="Now Playing"
				paginaActual="1"
			/>
		</section>
	);
};

export default NowPlaying;
