import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "../src/hooks/useTheme";

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
