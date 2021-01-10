import React, { Component } from 'react';
import '../index.css';

class Footer extends Component {
  year = function () {
    var d = new Date();
    var y = d.getFullYear();
    return y;
  };

  render() {
    return (
      <footer>
        <p>Copyright ⓒ {this.year()} </p>
      </footer>
    );
  }
}

export default Footer;
