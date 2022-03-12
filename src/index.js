import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import movieReducer from "./features/movies";
import singleMovieReducer from "./features/singleMovie";
import searchedMovieReducer from "./features/searchedMovies";
import actorReducer from "./features/actors";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ActorList from "./pages/ActorList";
import MovieList from "./pages/MovieList";

import Genre from "./pages/Genre";
import SingleMovie from "./components/SingleMovie";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    singleMovie: singleMovieReducer,
    searchedMovies: searchedMovieReducer,
    actors: actorReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/movies/:id" element={<SingleMovie />} />
            <Route path="/" element={<App />} />
            <Route path="/ActorList" element={<ActorList />} />
            <Route path="/MovieList" element={<MovieList />} />
            <Route path="/genre" element={<Genre />} />
            
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
