import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Searchbar from "../Searchbar";
import Home from "../../movies/Home";
import "./styles/main.scss";
import { BsArrowUpRight } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { FiPlayCircle } from "react-icons/fi";
import NowPlaying from "../../movies/NowPlaying";
import Popular from "../../movies/Popular";
import TopRated from "../../movies/TopRated";
import Upcoming from "../../movies/Upcoming";
import Movie from "../Movie";
import { URL_BASE } from "../../constants/api";
import Search from "../../movies/Search";

const createUrl = (site) =>
	`${URL_BASE}/movie/${site}?api_key=${process.env.REACT_AP_API_KEY}`;

//Estas SECCIONES las puedo sacar? las puedo pasar a sus componentes? creo que las imagenes son las que me están obstaculizando. Revisar.
const secciones = [
	{
		buttonImage: <BsStar />,
		buttonText: "Popular",
		buttonLink: "/movies/popular",
		cat: createUrl("popular"),
		catname: "Popular Movies",
	},
	{
		buttonImage: <BsArrowUpRight />,
		buttonText: "Top Rated",
		buttonLink: "/movies/toprated",
		cat: createUrl("top_rated"),
		catname: "Top Rated Movies",
	},
	{
		buttonImage: <CgCalendarDates />,
		buttonText: "Upcoming",
		buttonLink: "/movies/upcoming",
		cat: createUrl("upcoming"),
		catname: "Upcoming Movies",
	},
	{
		buttonImage: <FiPlayCircle />,
		buttonText: "Now Playing",
		buttonLink: "/movies/nowplaying",
		cat: createUrl("now_playing"),
		catname: "Now Playing Movies",
	},
];

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar links={secciones} />
					<header className="header">
						<Searchbar />
					</header>
					{/* necesito que modal sea un condicional, que solo renderice si es verdadero, y a la vez tengo que pasarle parametros desde Movies, y crearle su propia pagina */}

					<Route exact path="/">
						<Home categorias={secciones} />
					</Route>
					<Route exact path="/movies/popular">
						<Popular />
					</Route>
					<Route exact path="/movies/toprated">
						<TopRated />
					</Route>
					<Route exact path="/movies/upcoming">
						<Upcoming />
					</Route>
					<Route exact path="/movies/nowplaying">
						<NowPlaying />
					</Route>
					<Route exact path="/movie/:id">
						<Movie />
					</Route>
					<Route exact path="/search/:value">
						<Search />
					</Route>
				</div>
			</Router>
		);
	}
}

export default App;
