import React, { Component } from 'react';
import Header from './components/HeaderTab/Header'
import './App.css'
import SideDrawer from './components/HeaderTab/SideDrawer';
import Backdrop from './components/HeaderTab/Backdrop';


class App extends Component {
  constructor() {
    super()
    this.state = {
      sideDrawerOpen: false
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {

    
    let backdrop;

    if (this.state.sideDrawerOpen) {
      
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    );
  }
}

export default App;
