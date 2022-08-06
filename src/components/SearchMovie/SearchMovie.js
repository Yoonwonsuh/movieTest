import React, { useEffect, useState } from "react";
import shortid from "shortid";
import { AllMovies } from "../../features/movies/movieSlice";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/movieAPiKey";
import { useSelector } from "react-redux";
import { isFulfilled } from "@reduxjs/toolkit";

const SearchMovie = () => {
  let [movieText, setMoiveText] = useState();

  let [movieImg, setMovieImg] = useState();

  const onSearchHandler = (e) => {
    const value = e.target.value;
    setMoiveText(value);
  };

  // let movieTitle ="";
  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
    
  //   movieTitle = movieText.movie;
  //   console.log(movieImg);
  
  // };
  // const testAxios = movieApi
  //   .get(`?apikey=${APIkey}&s=Friends&type=movie`)
  //   .then((data) => {
  //     let copy = [...movieImg, data.data]
  //     setMovieImg(copy);
  //   });
  // console.log(testAxios);


  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const response = await movieApi
  //       .get(`?apikey=${APIkey}&s=${movieText.movie}&type=movie`)
  //       .then((data)=>{
  //         let copy = data.data;
  //         setMovieImg(copy);
  //       })
  //       .catch((err) => {
  //         console.log("Err :", err);
  //       });
  //       console.log(response)
  //   };
  //   fetchMovies();
  // }, []);

  return (
    <div>
      <form >
        <input
          type="text"
          name="movie"
          value={movieText.movie}
          onChange={onSearchHandler}
        />
        <button />
      </form>
    </div>
  );
};

export default SearchMovie;
