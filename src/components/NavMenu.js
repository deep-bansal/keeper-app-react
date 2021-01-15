import React, { Component } from 'react';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

class NavMenu extends Component {
  render() {
    return (
      <div className="navmenu">
        <ul className="list">
          <li>
            <EmojiObjectsOutlinedIcon className="nav-icons" />
            <span>Notes</span>
          </li>
          <li>
            <LabelOutlinedIcon className="nav-icons" />
            <span>Label</span>
          </li>
          <li>
            <DeleteOutlineIcon className="nav-icons" />
            <span>Delete</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavMenu;