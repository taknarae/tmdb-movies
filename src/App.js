// import './App.css';
import "./App.scss";

import Nav from './components/Nav';
import Footer from './components/Footer';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";                                      
import Event from "./pages/Event.jsx";
import Users from "./pages/Users.jsx";

import MovieDetail from "./pages/MovieDetail.jsx";
import UpComing from "./components/UpComing.jsx";
import Coming from "./pages/Coming.jsx";
import SearchDetail from "./pages/SearchDetail.jsx";

import BtnPageTop from "./components/BtnPageTop.jsx";

import UserDetail from "./components/UserDetail.jsx"; 


function App() {
  return (
    <>
      <div className="App">
        <Nav/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:id" element={<MovieDetail/>}/>
            <Route path="/coming/:id" element={<Coming/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users:id" element={<UserDetail/>}/>
            <Route path="/search/:movieId" element={<SearchDetail/>}/>
          </Routes>
        </main>
        <Footer/>
        <BtnPageTop/>
      </div>
    </>
  );
}

export default App;
