import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./assets/styles/utility.css";
import { Fragment } from "react";
import Routers from "./router/index";

function App() {
  return (
    <Fragment>
      <Routers />
    </Fragment>
  );
}

export default App;
