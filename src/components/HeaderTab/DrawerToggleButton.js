import React, { Component } from 'react';
import './DrawerToggleButton.css';

class DrawerToggleButton extends Component {
    render() {
        return (
                <button className="toggle-button" onClick={this.props.click}>
                    <div className="toogle-button_line"/>
                    <div className="toogle-button_line"/>
                    <div className="toogle-button_line"/>
                </button>
                
        );
    }
}

export default DrawerToggleButton;
