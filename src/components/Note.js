import React, { Component } from 'react';
import '../index.css';

class Note extends Component {
  handleClick = (id) => {
    const { deleteNote } = this.props;
    deleteNote(id);
  };
  render() {
    const { note } = this.props;
    return (
      <div className="note">
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <button
          onClick={() => {
            this.handleClick(note.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Note;
