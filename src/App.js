import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/styles/utility.css';
import React from 'react';
import Routers from './router/index';
import { Fragment } from "react";

function App() {
  return (
  <Fragment>
      <Routers />
  </Fragment>

  );
}

export default App;
