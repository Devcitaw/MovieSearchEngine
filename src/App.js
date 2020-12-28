import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Home from "./movies/Home";
import "./styles/main.scss";
import { BsArrowUpRight } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { FiPlayCircle } from "react-icons/fi";
import NowPlaying from "./movies/NowPlaying";
import Popular from "./movies/Popular";
import TopRated from "./movies/TopRated";
import Upcoming from "./movies/Upcoming";
import Movie from "./components/Movie";
import { URL_BASE } from "./constants/api";
import Search from "./movies/Search";

const createUrl = (site) =>
	`${URL_BASE}/movie/${site}?api_key=${process.env.REACT_AP_API_KEY}`;

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

const App = () => {
	return (
		<React.Fragment>
			<Navbar links={secciones} />
			<header className="header">
				<Searchbar />
			</header>
			<Switch>
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
				<Route exact path="/search/:value">
					<Search />
				</Route>
			</Switch>

			<Route exact path="/movie/:id">
				<Movie />
			</Route>
		</React.Fragment>
	);
};

export default App;
