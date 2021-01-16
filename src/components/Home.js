import React from 'react';
import { CreateNote, Note } from './';

function Home(props) {
  return (
    <div className="notes-area">
      <CreateNote onAdd={props.addNote} />

      {props.pinNotes.length > 0 && <h2>Pinned</h2>}
      {props.pinNotes.length > 0 && (
        <div className="pinned">
          {props.pinNotes.map((note) => {
            return (
              <Note note={note} key={note.id} updateNote={props.updateNote} />
            );
          })}
        </div>
      )}
      <br></br>
      {props.pinNotes.length > 0 && <h2>Others</h2>}
      <div className="others">
        {props.notesArray.map((note) => {
          return (
            <Note note={note} key={note.id} updateNote={props.updateNote} />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
