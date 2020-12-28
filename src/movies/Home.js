import React from "react";
import HomeHeader from "../components/HomeHeader";
import CategoryPreview from "../components/CategoryPreview";

const Home = (props) => {
	return (
		<section className="main">
			<section className="home">
				<HomeHeader headername="Ada - Buscador de Peliculas" />
				<CategoryPreview
					cat="https://api.themoviedb.org/3/movie/popular?api_key=12083d05b92b51e4bd659c8b36f81253"
					catname="Popular Movies"
					buttonLink="/movies/popular"
				/>
				<CategoryPreview
					cat="https://api.themoviedb.org/3/movie/top_rated?api_key=12083d05b92b51e4bd659c8b36f81253"
					catname="Top Rated Movies"
					buttonLink="/movies/top_rated"
				/>
				<CategoryPreview
					cat="https://api.themoviedb.org/3/movie/upcoming?api_key=12083d05b92b51e4bd659c8b36f81253"
					catname="Upcoming Movies"
					buttonLink="/movies/upcoming"
				/>
				<CategoryPreview
					cat="https://api.themoviedb.org/3/movie/now_playing?api_key=12083d05b92b51e4bd659c8b36f81253"
					catname="Now Playing Movies"
					buttonLink="/movies/now_playing"
				/>
			</section>
		</section>
	);
};

export default Home;
