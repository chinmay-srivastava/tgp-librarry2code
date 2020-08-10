import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DETAILS}  from './shared/details'
import Tiles from './components/tiles'
import Tiles2 from './components/tile2'
import Tiles3 from './components/tiles3'
import Tiles4 from './components/tiles4'
import slide from "./components/carousel"
import Collapsible from './components/collapse'
import Header from'./components/header';
import { NavbarBrand,Navbar, Nav, NavDropdown, Button, Media } from "reactstrap";


class App extends Component{

  constructor(props){
    super(props);

    this.state={
     details:DETAILS,
     open:false
      }
      this.close=this.close.bind(this);
}

close(){
this.setState({
open:!this.state.open
});
}

  render() {
    return (
      <div className="App" onClick={this.close}>
      <Header/>
      <div >
      <Tiles  details={this.state.details}/>
      <Tiles2  details={this.state.details}/>
      <Tiles3  details={this.state.details}/>
      <Tiles4  details={this.state.details}/>
      </div>
      </div>
       
     
    );
  }
}



export default App;
