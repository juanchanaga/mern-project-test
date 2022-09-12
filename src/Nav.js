import React from 'react';
import logo from './img/Logo NST 3.png';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.changeStateMenu = this.changeStateMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  hideMenu() {
    this.setState({
      showMenu: false,
    });
  }

  changeStateMenu() {
    this.setState((state) => {
      return {
        showMenu: !state.showMenu,
      };
    });
  }

  render() {
    return (
      <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://parzibyte.me/l/fW8zGd">
            <img alt="logo" src={logo} style={{ maxHeight: '80px' }} />
          </a>
          <button
            onClick={this.changeStateMenu}
            className={`navbar-burger ${this.state.showMenu ? 'is-active' : ''} is-warning button`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={`navbar-menu ${this.state.showMenu ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <NavLink onClick={this.hideMenu} activeclassname="is-active" className="navbar-item" to="/videogames/view">
              View Videogames
            </NavLink>
            <NavLink onClick={this.hideMenu} activeclassname="is-active" className="navbar-item" to="/videogames/add">
              Add Videogames
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-items">
              <div className="buttons">
                <a target="_blank" rel="noreferrer" href="https://parzibyte.me/l/fW8zGd" className="button is-primary">
                  <strong>Help and Support</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
