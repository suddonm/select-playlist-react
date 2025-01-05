import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SubmissionPage from './SongSubmissionForm'; // Your submission page component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<LandingPage/>} />
        <Route path="/submit" component={<SubmissionPage/>} />
      </Routes>
    </Router>
  );
};

export default App;