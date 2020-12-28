import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const nodes = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

ReactDOM.render(nodes, document.getElementById("root"));
