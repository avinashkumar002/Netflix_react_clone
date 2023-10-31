
import React from "react";
import './App.scss';
import Header from './components/Header.js';
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
import List from "./components/List";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/login" element={
            <React.Fragment>
              <Header />
              <Login page={true} />
            </React.Fragment>
          }/>
          <Route path="/register" element={
            <React.Fragment>
              <Header />
              <Login page={false} />
            </React.Fragment>
          }/>
          <Route path="/" element={<React.Fragment>
            <Header />
            <HomeBanner />
          </React.Fragment>} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Header/>
              <Banner />
              <List title="Netflix Originals" param="originals" />
              <List title="Trending Now" param="trending" />
              <List title="Now Playing" param="now_playing" />
              <List title="Popular" param="popular" />
              <List title="Top Rated" param="top_rated" />
              <List title="Upcoming" param="upcoming" />
            </ProtectedRoute>
          }/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
