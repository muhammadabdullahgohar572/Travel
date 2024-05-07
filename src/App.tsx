import React from "react";

import "./App.css";
import { Navbar } from "./components/Lesson no1/Navbar";
import { Page } from "./pages/Pages";
import { Route, Routes } from "react-router-dom";
import { Sngup } from "./Singup/Singup";
import { Login } from "./Singup/Logn";
import { Contact } from "./Singup/Contact";
import { About } from "./Singup/About";
import RentalsPage from "./Singup/Rental";
// import { CaCategoriesPage } from "./Singup/Catray";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="md:flex hidden">
          {/* This space is for your additional content, hidden on md and up */}
          <br />
          <br />
          <br />
        </div>

        <div className="overflow-auto">
          <Routes>
            <Route path="/">
              <Route path="/" element={<Page />} />
              <Route path="page" element={<Page />} />
              <Route path="home" element={<Page />} />

              <Route path="sngup" element={<Sngup />} />
              <Route path="login" element={<Login />} />
              <Route path="contact" element={<Contact />} />
              <Route path="About" element={<About />} />
              <Route path="Rentals" element={<RentalsPage />} />
              {/* <Route path="Categories" element={<CaCategoriesPage/>} /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
