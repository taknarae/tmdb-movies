import React, { useState } from 'react';
import ListMovie from '../components/ListMovie';
import MoviesForm from '../components/MoviesForm';

const Movies = () => {
  const [movies, setMovies] = useState([
    // { title: "톰과 제리 : 더 무비", year:"1992-10-01" },
    // { title: "톰과 제리: 오즈의 마법사", year:"2011-08-23" },
    // { title: "톰과 제리: 로빈 후드", year:"2012-10-02" },
    // { title: "톰과 제리: 잭과 콩나무", year:"2013-08-04" },
    // { title: "톰과 제리 : 스파이 대작전", year:"2015-06-09" },
    // { title: "톰과 제리: 윌리 웡카와 초콜릿 공장", year:"2017-06-28" },
  ]);

  const removeMovie = (id)=>{
    setMovies(movies.filter((movie)=>{
      return movie.id !== id;
    }));
  }
  const addMovie = (movie)=>{
    setMovies([...movies, movie])
  }

  return (
    <>
      <div className="p-movies">
        <div className="layout-fix">
          {/* header Page &gt; Movies Page */}
          <div className="movies">
            <h2 className="heading-title">Movie list</h2>
            <MoviesForm addMovie={addMovie}/>
            <ul className="mov-list">
              {movies.map(el => (
                <ListMovie elem={el} key={el.title} removeMovie={removeMovie}/>
              ))}
            </ul>
          </div>
          {/* <MoviesForm movies={movies} setMovies={setMovies}/> */}
        </div>
      </div>
    </>
  );
};

export default Movies;