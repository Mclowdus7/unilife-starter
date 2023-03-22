import React,{useState} from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import AllCities from './Pages/AllCities/AllCities';
import CityDetails from './Pages/CityDetails/CityDetails';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BookingForm from './Components/BookingForm/BookingForm';
import ContactForm from './Components/ContactForm/ContactForm';
import Favorites from './Pages/Favorites/Favorites';
import FavoriteContextProvider from './contexts/FavoriteContext';

function App() {





  return (
    <div>
      <BrowserRouter>
        <FavoriteContextProvider>
          <Header />
              <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/cities" element={<AllCities />} />
                  <Route path="/citydetails/:city_id" element={<CityDetails />} />
                  <Route path="/propertydetails/:id" element={<PropertyDetails />} />
                  <Route path="/booking/:id" element={<BookingForm />} />
                  <Route path='/contact' element={<ContactForm />} />
                  <Route path='/favorites' element={<Favorites />} />
              </Routes>
            <Footer />
          </FavoriteContextProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;
