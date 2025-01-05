import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SubmissionPage from './SongSubmissionForm'; // Your submission page component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage/>} />
        <Route path="/submit" element={<SubmissionPage/>} />
      </Routes>
    </Router>
  );
};

export default App;