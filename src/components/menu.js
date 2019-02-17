import React, { Component } from 'react'
import ToggleButton from './toggleButton';
import './menu.css'

class Menu extends Component{
  state = {
    toggleMenu: false
  }

  toggleMenuHandler = () => ( this.setState({ toggleMenu: !this.state.toggleMenu }))

  render() {
    return (
      <>
        <div onClick={this.toggleMenuHandler}>
          <ToggleButton active={this.state.toggleMenu} />
        </div>
        <div className={'overlay ' + (this.state.toggleMenu ? 'open' : '')} >
          <nav className="overlay-menu">
            <ul>
              <li onClick={this.toggleMenuHandler}><a href="#home">POCETNA</a></li>
              <li onClick={this.toggleMenuHandler}><a href="#price">CENE</a></li>
              <li onClick={this.toggleMenuHandler}><a href="#contact">KONTAKT</a></li>
            </ul>
          </nav>
        </div>
      </>
      
    )
  }
  
}

export default Menu;