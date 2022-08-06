import React, { useState } from "react";
import { APIkey } from "../../common/apis/movieAPiKey";
import movieApi from "../../common/apis/movieApi";


const SearchForm = () => {
  let [movieTitle, setMovieTitle] = useState("");

  let onChangeHandler = (e) => {
    const copy = e.target.value;
    setMovieTitle(copy);
  };

  let [searchMovie, setSearchMovie] = useState();

  console.log(searchMovie);

  let onSubmitHandler = (e) => {
    e.preventDefault();
    movieApi
      .get(`?apikey=${APIkey}&s=${movieTitle}&type=movie`)
      .then((data) => {
        let copy = data.data.Search;
        setSearchMovie(copy);
        // console.log(data);
      })
      .catch((err) => {
        console.log("Err :", err);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="title"
          value={movieTitle}
          placeholder="제목을 입력하세요!"
          onChange={onChangeHandler}
        />
      </form>
      {searchMovie !== undefined ? searchMovie.map((movie, index)=>
        <img src={movie.Poster}/>) : ''
  }
    </div>
  );
};

export default SearchForm;
