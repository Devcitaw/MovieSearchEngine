import React from "react";
import Category from "../components/Category";
import { useParams } from "react-router";

const Search = () => {
	const { value } = useParams();

	return (
		<section className="main">
			<Category
				cat={`https://api.themoviedb.org/3/search/movie?api_key=12083d05b92b51e4bd659c8b36f81253&query=${value}`}
				catname="Search Results"
				paginaActual="1"
			/>
		</section>
	);
	// }, [value]);
};

export default Search;
