import React,{useState} from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import AllCities from './Pages/AllCities/AllCities';
import CityDetails from './Pages/CityDetails/CityDetails';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {





  return (
    <div>
      <BrowserRouter>
          <Header />
              <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/cities" element={<AllCities />} />
                  <Route path="/properties/city/:city_id" element={<CityDetails />} />
              </Routes>
          <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;
