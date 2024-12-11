import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <footer class="footer bg-dark text-center text-slate-600">
        <div class="container">
          <div class="row">
            <div class="col-12 bg-slate-400 mt-10">
             
              <p class="lead">Made with ❤️ by Ranjeet Singh Tharu &copy; 2024 - All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}
