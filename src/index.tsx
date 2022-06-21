import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";

const element = (
  <Router>
    <App />
  </Router>
);

const rootElement = document.getElementById("root");
render(element, rootElement);
