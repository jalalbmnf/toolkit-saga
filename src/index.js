import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import catsReducer from "./catState";
import catSaga from "./catSaga";

import "./index.css";
import App from "./App";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { cats: catsReducer },
  middleware: [saga],
});

saga.run(catSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
