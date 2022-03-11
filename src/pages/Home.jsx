import React from "react";
import TrendingMovies from "../components/TrendingMovies";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <React.Fragment>
      <Slider />
      <TrendingMovies />
    </React.Fragment>
  );
};

export default Home;
