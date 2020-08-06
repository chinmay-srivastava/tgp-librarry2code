import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DETAILS}  from './shared/details'
import Tiles from './components/tiles'
import slide from "./components/carousel"
import Collapsible from './components/collapse'
import Header from'./components/header';
import { NavbarBrand,Navbar, Nav, NavDropdown, Button, Media } from "reactstrap";


class App extends Component{

  constructor(props){
    super(props);

    this.state={
     details:DETAILS
     

    };


  }

  render() {
    return (
      <div className="App">
      <Header/>
      
      <Tiles details={this.state.details}/>
      
      </div>
       
     
    );
  }
}



export default App;
