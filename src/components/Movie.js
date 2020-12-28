import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";

const Movie = () => {
	const [movie, setMovie] = useState();
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=12083d05b92b51e4bd659c8b36f81253`
			)
			.then((res) => {
				setMovie(res.data);
			})
			.catch((err) => alert(`Error! ${err}`));
	}, [id]);

	if (!movie) return null;

	const backdrop = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
	const poster = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const movieD = new Date(movie.release_date);
	const movieMonth = movieD.getMonth();
	const movieMonthName = months[movieMonth];
	const movieDate = `${movieD.getDate()} ${movieMonthName} ${movieD.getFullYear()}`;

	const movieGenres = movie.genres.map((genre) => <span>{genre.name} </span>);

	const peli = (
		<div className="movie-popup" style={{ visibility: "visible" }}>
			<div className="movie-popup__box">
				<section className="movie">
					<div className="movie__container">
						<header
							className="movie__header"
							style={{ backgroundImage: `url(${backdrop})` }}
						>
							<div className="movie__wrap movie__wrap--header">
								<figure className="movie__poster">
									<img
										src={`${poster}`}
										className="movie__img is-loaded"
										alt="movieposter"
									/>
								</figure>
								<div className="movie__title">
									<h1 className="movie__title-text">
										{movie.original_title}
										<span>{movie.tagline}</span>
									</h1>
								</div>
							</div>
						</header>
						<div className="movie__main">
							<div className="movie__wrap movie__wrap--main">
								<div className="movie__info">
									<div className="movie__description">{movie.overview}</div>
									<div className="movie__details">
										<div className="movie__details-block">
											<h2 className="movie__details-title">Genres</h2>
											<div className="movie__details-text">{movieGenres}</div>
										</div>
										<div className="movie__details-block">
											<h2 className="movie__details-title">Release Date</h2>
											<div className="movie__details-text">{movieDate}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<button
					className="movie-popup__close"
					onClick={() => history.goBack()}
				></button>
			</div>
			<i className="loader"></i>
		</div>
	);

	return peli;
};

export default Movie;
