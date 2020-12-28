import React, { Component } from "react";
import LoadCategory from "./LoadCategory";
import axios from "axios";

// cambiar esto de componente de clase a Hook y usar un spread operator para que añada mas resultados y renderice los nuevos
class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			category: props.cat,
			catname: props.catname,
			peliculas: [],
			results: "",
			paginaActual: props.paginaActual,
		};
	}

	componentDidMount() {
		axios.get(`${this.state.category}`).then((res) => {
			const titulos = res.data;
			this.setState({
				peliculas: titulos,
				results: titulos.total_results,
			});
		});
		// .then((res) => {
		// 	console.log(this.state.titulos);
		// });
		//descomenta para testear
	}

	render() {
		return (
			<div className="wrapper">
				<div className="movies">
					<header className="movies__header">
						<h2 className="movies__title">{this.state.catname}</h2>
						<span className="movies__results">
							{" "}
							{this.state.results} results
						</span>
					</header>

					<LoadCategory
						cat={this.state.category}
						catname={this.state.catname}
						paginaActual={this.state.paginaActual}
					/>
				</div>
			</div>
		);
	}
}

export default Category;
