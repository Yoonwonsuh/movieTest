import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import SearchForm from "./components/Search/SearchForm";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="/form" element={<SearchForm/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
