import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavbarComp } from './component';
import { Home, Success } from "./pages";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComp />
        <main>
          <Routes>
            <Route path='/' Component={Home} exact />
            <Route path='/success' Component={Success} exact />
          </Routes>
        </main>
      </BrowserRouter>
    )
  }
}
