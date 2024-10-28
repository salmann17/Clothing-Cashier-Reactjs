import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavbarComp from './component/NavbarComp';
import Home from "./pages/Home";
import Success from "./pages/Success";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComp />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/success' element={<Success />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
