import React from 'react';
import Navbar from '../Components/Navbar';
import Skill from '../Components/Header/Skill';
import Footer from '../Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../Components/Header/About';
import Project from './Header/Project';
import Blog from './Header/Blog';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Fixed Navbar */}
        <header className="fixed top-5 left-0 w-full ">
          <Navbar />
        </header>

        {/* Main content area with padding to avoid overlap with fixed header/footer */}
        <main className="flex-1 pt-16 pb-16 bg-teal-950 text-white">
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Skill" element={<Skill />} />
            <Route path="/Project" element={<Project />} />
              <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        {/* Fixed Footer */}
        <footer className="fixed bottom-0 left-0 w-full ">
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default Layout;
