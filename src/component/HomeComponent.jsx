import React, { Component } from 'react';
//import '../App.css';
//import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class HomeComponent extends Component {
  render() {
    return (
      <div>
          <Button color="link"><Link to="/users">Manage Users</Link></Button>
      </div>
    );
  }
}

export default HomeComponent;