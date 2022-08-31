import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './pages/AdminHome/AdminHome'
import ApplicationFormPage from './pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from './pages/CreateTripPage/CreateTripPage'
import HomePage from './pages/HomePage/HomePage'
import ListTripPage from './pages/ListTripsPage/ListTripsPage'
import LoginPage from './pages/LoginPage/LoginPage'
import TripDatailsPage from './pages/TripDatailsPage/TripDatailsPage'
import { GlobalStyle } from "./GlobalStyle";

function App() {
  
  return (
    <div>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/admin/trips/list' element={<AdminHome />} />
        <Route path='/admin/trips/create' element={<CreateTripPage />} />
        <Route path='/admin/trips/:id' element={<TripDatailsPage />} />
        <Route path='trips/application' element={<ApplicationFormPage />} />
        <Route path='/trips/list' element={<ListTripPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
