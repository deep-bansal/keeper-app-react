import React, { Component } from 'react';
import HighlightIcon from '@material-ui/icons/Highlight';
import '../index.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 style={styles.heading}>
          <HighlightIcon /> Keeper
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
    marginLeft: '30',
    marginTop: '30',
  },
};

export default Header;
