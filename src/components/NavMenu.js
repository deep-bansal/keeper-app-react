import React, { Component } from 'react';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom';

class NavMenu extends Component {
  render() {
    return (
      <div className="navmenu">
        <ul className="list">
          <li>
            <Link to="/">
              <EmojiObjectsOutlinedIcon className="nav-icons" />
              {this.props.expandNavMenu && <span>Notes</span>}
            </Link>
          </li>
          <li>
            <LabelOutlinedIcon className="nav-icons" />
            {this.props.expandNavMenu && <span>Label</span>}
          </li>
          <li>
            <Link to="/deletedNotes">
              <DeleteOutlineIcon className="nav-icons" />
              {this.props.expandNavMenu && <span>Delete</span>}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavMenu;
