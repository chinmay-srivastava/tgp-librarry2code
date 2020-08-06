import React, {Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, CardDeck} from 'reactstrap';
import { Link } from 'react-router-dom';
import Tiles from './tiles'

class Collapsible extends React.Component {
    constructor(props){
    super(props);
    this.state = {
    open: false
    }
    this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e){
    this.setState({open: !this.state.open})
    }
    render() {
    return (<div>
    <Tiles/>
    </div>);
    }
    }

    export default Collapsible;