// 메인 비주얼(upcoming)
import React, { useState, useEffect } from 'react';
import axios from "axios";

const MainComing = () => {
  const APIKEY = process.env.REACT_APP_API_KEY;

  const [upComingMov,setUpComingMov] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const getMovies = async()=>{
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=ko`);
      setUpComingMov(response.data.results);
      // console.log("MainComing.jsx==", response);

      setIsLoading(false);
    } catch(err){
      // console.log("Error:", err)
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    getMovies();
  }, [])

  const getRandomMov = ()=>{
    const randomIdx = Math.floor(Math.random() * upComingMov.length);
    return upComingMov[randomIdx];
  }
  const randomMovie = getRandomMov();

  return (
    <>
      {/* discover/movie : 장르별, 평점별, 추천 수 별 영화들을 불러온다.
      /movie/{movie_id}/credits : 영화 출연진, 감독, 스태프 등을 불러온다.
      /movie/{movie_id} : 영화 상세정보를 불러온다.
      /movie/upcoming : 개봉 예정작을 불러온다.
      /movie/now_playing : 현재 상영작을 불러온다.
      /trending/{movie}/{time_window} : 일별, 주차별 인기작을 불러온다.
      /search/movie : 영화 검색 결과를 불러온다. */}
      <section className="section-visual">
        { isLoading ? (<p className="loading">로딩중</p>) : (
        <div className="upMovie">
          <div className="upComingImg">
            <img src={`https://image.tmdb.org/t/p/w500/${randomMovie.backdrop_path}`} alt={randomMovie.title}/>
          </div>
          <div className="mat">
            <div className="upComingInfo">
              <div className="infoImg"><img src={`https://image.tmdb.org/t/p/w300/${randomMovie.poster_path}`} alt={randomMovie.title}/></div>
              <div className="infoTxt">
                <p className="title">{randomMovie.original_title}</p>
                <p className="overview">{randomMovie.overview}</p>
                <p className="date">{randomMovie.release_date}</p>
              </div>
            </div>
          </div>

          </div>
        ) }

        
        
      </section>
    </>
  );
};

export default MainComing;