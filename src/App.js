import "./App.css";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import TrendingMovies from "./components/TrendingMovies";

function App() {
  return (
    <>
      <Slider />
      <TrendingMovies />
    </>
  );
}

export default App;
