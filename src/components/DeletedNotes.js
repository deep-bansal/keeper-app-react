import React from 'react';
import { Note } from './';

function DeletedNotes(props) {
  return (
    <div className="notes-area">
      {props.deletedNotes.length === 0 && (
        <div className="blank-backgorund">
          <i className="far fa-trash-alt"></i>
          <br></br>
          <br></br>
          No notes in Trash
        </div>
      )}
      {props.deletedNotes.map((note) => {
        return (
          <Note
            note={note}
            key={note.id}
            deleteNote={props.deleteNote}
            updateNote={props.updateNote}
            deleteNoteForever={props.deleteNoteForever}
          />
        );
      })}
    </div>
  );
}

export default DeletedNotes;
