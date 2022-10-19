<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/styles/utility.css';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Router from './router/index.js';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

=======
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./assets/styles/utility.css";
import React from "react";
import Routers from "./router/index";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routers />
    </Fragment>
  );
}

export default App;
>>>>>>> 41cc484d2c46d2ddf88c6662e8cdc5e74247d55a
