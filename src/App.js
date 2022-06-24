import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="bg-[#040720] text-white">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
