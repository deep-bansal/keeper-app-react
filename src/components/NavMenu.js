import React, { Component } from 'react';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ArchiveIcon from '@material-ui/icons/Archive';
import { Link } from 'react-router-dom';

class NavMenu extends Component {
  render() {
    return (
      <div className="navmenu">
        <ul className="list">
          <li className="li">
            <Link className="links" to="/">
              <EmojiObjectsOutlinedIcon className="nav-icons" />
              {this.props.expandNavMenu && <span>Notes</span>}
            </Link>
          </li>
          <li className="li">
            <Link className="links" to="/archiveNotes">
              <ArchiveIcon className="nav-icons" />
              {this.props.expandNavMenu && <span>Archive</span>}
            </Link>
          </li>

          <li className="li">
            <Link className="links" to="/deletedNotes">
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
