import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import SongSubmissionForm from "./components/SongSubmissionForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Overview />
      <SongSubmissionForm />
      <Footer />
    </div>
  );
};

export default App;
