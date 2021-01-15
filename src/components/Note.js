import React, { Component } from 'react';
import '../index.css';
import DeleteIcon from '@material-ui/icons/Delete';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ContentEditable from 'react-contenteditable';

class Note extends Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = {
      html: this.props.note.title,
      opacity: 0,
    };
  }
  handleClick = (id) => {
    const { deleteNote } = this.props;
    deleteNote(id);
  };
  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
    const { updateNote, note } = this.props;
    // console.log(note);
    const titleVal = evt.target.value;
    updateNote(titleVal, note);
  };
  handleAnimation = () => {
    this.setState({
      opacity: 1,
    });
    console.log(this.state);
  };
  handleMouseLeave = () => {
    this.setState({
      opacity: 0,
    });
    console.log(this.state);
  };

  render() {
    const { note } = this.props;
    return (
      <div
        className="note"
        onMouseEnter={this.handleAnimation}
        onMouseLeave={this.handleMouseLeave}
      >
        <ContentEditable
          innerRef={this.contentEditable}
          html={this.state.html} // innerHTML of the editable div
          disabled={false} // use true to disable editing
          onChange={this.handleChange} // handle innerHTML change
          tagName="h1" // Use a custom HTML tag (uses a div by default)
        />

        <p>{note.content}</p>
        <ul className="buttonList">
          <li style={{ ...styles, opacity: this.state.opacity }}>
            <button>
              <AddAlertOutlinedIcon />
            </button>
          </li>
          <li style={{ ...styles, opacity: this.state.opacity }}>
            <button>
              <PaletteOutlinedIcon />
            </button>
          </li>
          <li style={{ ...styles, opacity: this.state.opacity }}>
            <button>
              <LabelOutlinedIcon />
            </button>
          </li>
          <li style={{ ...styles, opacity: this.state.opacity }}>
            <button>
              <BookmarkBorderOutlinedIcon />
            </button>
          </li>
          <li style={{ ...styles, opacity: this.state.opacity }}>
            <button>
              <DeleteIcon />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const styles = {
  transition: 'all 0.5s ease-in-out',
};

export default Note;
