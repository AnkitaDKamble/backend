import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';

function App() {

  return (
    <Router>

      <Navbar />

      <div style={{ marginTop: '70px' }}>

        <Routes>

          {/* HOME PAGE WITH ALL COMPONENTS */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Aboutus />
                <Contactus />
              </>
            }
          />

          {/* SEPARATE ABOUT PAGE */}
           <Route
            path="/aboutus"
            element={
              <>
                <Aboutus />
                <Contactus />
              </>
            }
          />

          {/* SEPARATE CONTACT PAGE */}
          <Route
            path="/contactus"
            element={<Contactus />}
          />

        </Routes>

      </div>

      <Footer />

    </Router>
  );
}

export default App;