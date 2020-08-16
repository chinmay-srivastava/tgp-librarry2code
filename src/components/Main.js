import React, { Component } from 'react';

import {DETAILS} from '../shared/details';
import Tiles from './tiles'
import Header from  "./header"
import { NavbarBrand,Navbar, Nav, NavDropdown, Button, Media } from "reactstrap";


class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      details:DETAILS,
      open: [false, false, false, false]
    }
    this.close=this.close.bind(this);
  }

  close(id){
    let newOpen = this.state.open;
    this.state.open.forEach((current, index) => {
      console.log(index, id);
      if (index != id) {
        newOpen[index] = false;
      } else {
        newOpen[index] = true;
      }
    })
    console.log(newOpen);
    this.setState({open: newOpen});
  }

  render() {
    let content = [];
    //To push the image to the next row automatically.
    this.props.details.forEach((detail, i) =>{   //TypeError: Cannot read property 'forEach' of undefined
      if((i+1) % 4 == 0){
        content.push(
          <div className="row" key={detail.id}>       
          <Tiles open={this.state.open} close={this.close} id={i}/>
          </div>
        )
      }else{
          content.push(<article key={detail.id} className="col-md-3"></article>);
      }
  });

    return (
        <div >
          {content}
      </div>
    );
  }
}



export default Main;
