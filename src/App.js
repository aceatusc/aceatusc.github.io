import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import PeopleSection from './components/PeopleSection';
import ProjectsSection from './components/ProjectsSection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App" style={{minHeight: "100vh"}}>
        <Header />
        <main className="App-main pb-5" style={{minHeight: "79vh", maxWidth: 1200, justifyContent: "center", margin: "auto"}}>
          <Routes>
            <Route path="/about" element={<AboutSection/>} />
            <Route path="/people" element={<PeopleSection/>} />
            <Route path="/projects" element={<ProjectsSection/>} />
            <Route exact path="/" element={<Navigate replace to="/about" />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
