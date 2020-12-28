import React from "react";
import { FiSearch } from "react-icons/fi";
import { withRouter } from "react-router-dom";
//https://gist.github.com/elitan/5e4cab413dc201e0598ee05287ee4338

class Searchbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
		};
	}

	onChangeSearchword(e) {
		this.setState({
			search: e.target.value,
		});
	}

	startSearch(e) {
		e.preventDefault();
		const search = this.state.search;
		this.props.history.push(`/search/${search}`);
		// solucion de github, me da que history es UNDEFINED
		console.log(this.state.search);
	}

	render() {
		return (
			<div className="header__search">
				<form
					// onSubmit={(e) => this.startSearch(e)} MI SOLUCION
					onSubmit={this.startSearch.bind(this)}
					//la solucion del github
					className="header__search__form"
				>
					<FiSearch className="header__search-icon" />
					<input
						type="text"
						className="header__search__input"
						placeholder="Search for a movie..."
						name="searchword"
						value={this.state.search}
						onChange={(e) => this.onChangeSearchword(e)}
					/>
				</form>
			</div>
		);
	}
}

//Aca en el boton tengo que tirar un POST para que le pegue a la API y haga la busqueda.

export default withRouter(Searchbar);
