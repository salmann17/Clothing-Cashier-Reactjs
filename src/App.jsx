import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComp } from './component/Index';
import {Home, Success} from "./pages";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComp/>
        <main>
          <Switch>
            <Route path='' Component={Home}/>
            <Route path='/success' Component={Success}/>
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}
