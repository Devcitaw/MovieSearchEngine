import React from "react";

const Movies = ({ pic, title }) => {
	const poster = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${pic}`;
	return (
		<React.Fragment>
			<figure className="movies-item__poster">
				<img src={poster} alt="" className="movies-item__img is-loaded" />
			</figure>
			<div className="movies-item__content">
				<p className="movies-item__title">{title}</p>
			</div>
		</React.Fragment>
	);
};

export default Movies;
