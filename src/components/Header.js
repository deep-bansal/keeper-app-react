import React, { Component } from 'react';
import HighlightIcon from '@material-ui/icons/Highlight';
import MenuIcon from '@material-ui/icons/Menu';
import '../index.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 style={styles.heading}>
          <MenuIcon className="menuIcon" />
          <HighlightIcon className="logo" /> Keeper
        </h1>
      </header>
    );
  }
}

const styles = {
  div: {},
  heading: {
    height: '50',
    fontFamily: '"McLaren", cursive',
    color: '#fff',
    fontWeight: '200',
    fontSize: '2.2rem',
  },
};

export default Header;
