import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import movieReducer from "./features/movies";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Actors from "./pages/Actors";
import Movies from "./pages/Movies";
import Genre from "./pages/Genre";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/actors" element={<Actors />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/genre" element={<Genre />}/>
      </Routes>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
