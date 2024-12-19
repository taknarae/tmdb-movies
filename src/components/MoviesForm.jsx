import React, { useState } from 'react';

// const MoviesForm = ({movies, setMovies}) => {
const MoviesForm = ( {addMovie} ) => {
  const [movTitle, setMovTitle] = useState("");
  const [movYear, setMovYear] = useState("");

  const [titleErr,setTitleErr] = useState(""); //제목입력하지 않았을때 에러 상태관리
  const [yearErr,setYearErr] = useState(""); //제목입력하지 않았을때 에러 상태관리

  const resetForm = ()=>{
    setMovTitle("");
    setMovYear("");
  }
  const validateForm =()=>{
    resetErr();
    let validate = true;
    if(!movTitle){ //movTitle이 빈값이면
      setTitleErr("제목을 입력하세요");
      validate = false;
    }
    if(!movYear){ //movYear 빈값이면
      setYearErr("일자를 입력하세요");
      validate = false;
    }
    return validate;
  }
  const resetErr = ()=>{
    setTitleErr("");
    setYearErr("");
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // const formattedYear = movYear.length === 8 ?  // 날짜 형식 변환 (YYYY-MM-DD)
    //   `${movYear.substring(0, 4)}-${movYear.substring(4, 6)}-${movYear.substring(6, 8)}` 
    //   : movYear;

    if(validateForm()){
      addMovie({
        id: Date.now(),
        title: movTitle,
        year: movYear, //or formattedYear
      })
      resetForm();
    }


    // setMovies([...movies, { title: movTitle, year: formattedYear }]);
    // setMovTitle("");
    // setMovYear("");
  };
  const handleYearChange = (e) => {
    const value = e.target.value;
    // 숫자만 8글자까지 입력 허용
    if (/^\d{0,8}$/.test(value)) {
      setMovYear(value);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="제목을 입력해주세요" value={movTitle} onChange={e=>setMovTitle(e.target.value)}/> {/*required*/}
        <span className="err">{titleErr}</span>
        <input type="text" placeholder="개봉일자를 입력해주세요" value={movYear} onChange={handleYearChange} maxLength={8}/>
        <span className="err">{yearErr}</span>
        <button type="submit">추가</button>
      </form>
    </>
  );
};

export default MoviesForm;