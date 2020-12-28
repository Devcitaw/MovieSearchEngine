import React, { Component } from "react";
import Movies from "./Movies";
import { Link } from "react-router-dom";
import axios from "axios";

class CategoryPreview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// category: props.seccion.cat,
			// catname: props.seccion.catname,
			// buttonlink: props.seccion.buttonLink,
			// Si en home uso un map, esto no funciona
			category: props.cat,
			catname: props.catname,
			buttonlink: props.buttonLink,
			peliculas: [],
		};
	}

	componentDidMount() {
		axios
			.get(`${this.state.category}`)
			.then((res) => {
				const titulos = res.data.results;
				this.setState({
					peliculas: titulos.slice(0, 5),
				});
			})
			.then((res) => {
				console.log(this.state.peliculas);
			});
	}

	render() {
		const { peliculas } = this.state;
		return (
			<div className="wrapper">
				<div className="movies">
					<header className="movies__header">
						<h2 className="movies__title">{this.state.catname}</h2>
						<Link to={this.state.buttonlink} className="nav__link">
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
	}
}

//para ver 5, en vez de map usa un
export default CategoryPreview;
