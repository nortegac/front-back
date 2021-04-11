import React from "react";
import ReactDOM from "react-dom";

import JobsList from "./components/Jobs";
import Form from "./components/Form"

ReactDOM.render(<Form/>, document.getElementById("root"))
ReactDOM.render(<JobsList/>, document.getElementById("offers"));