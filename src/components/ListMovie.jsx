import React from 'react';

const ListMovie = ( {elem, removeMovie} ) => {
  return (
    <>
      {/* p-movies */}
      <li>
        <p className="title">{elem.title}</p>
        <p className="year">{elem.year}</p>
        <button className="btnRemove" onClick={()=>{ removeMovie(elem.id) }}>X</button>
      </li>
    </>
  );
};

export default ListMovie;