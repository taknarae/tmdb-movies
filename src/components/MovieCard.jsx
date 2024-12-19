import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ( {id, poster, title, titleEn, vote} ) => {
  return (
    <>
      <li key={id}>
        <Link to={`Movies/${id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${poster}`} />
          <div className="tit">{title}</div>
          <div className="tit-en">{titleEn}</div>
          <div className="vote">★ {vote}</div>
        </Link>
      </li>
    </>
  );
};

export default MovieCard;



// const MovieCard = ({ props }) => {
//   return (
//     <>
//       <li key={props.idx}>
//         <img src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`} />
//         <div className="tit">{props.el.title}</div>
//         <div className="tit-en">{props.el.original_title}</div>
//         <div className="vote">★ {props.el.vote_average.toFixed(1)}</div>
//       </li>
//     </>
//   );
// };

// export default MovieCard;

