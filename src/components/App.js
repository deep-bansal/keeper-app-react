import React, { Component } from 'react';
import { Header, Footer, Note, NavMenu } from './';
import CreateNote from './CreateNote';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArray: [],
    };

    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db.collection('Notes').onSnapshot((snapshot) => {
      const notesArray = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      this.setState({
        notesArray,
      });
    });
  }

  addNote = (title, content) => {
    this.db
      .collection('Notes')
      .add({
        title: title,
        content: content,
      })
      .then((docRef) => {
        console.log('Note has been added', docRef);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  deleteNote = (id) => {
    const newNotesArr = this.state.notesArray.filter((note) => note.id !== id);
    this.setState({
      notesArray: newNotesArr,
    });
  };
  updateNote = (titleVal, note) => {
    const docRef = this.db.collection('Notes').doc(note.id);
    docRef
      .update({
        title: titleVal,
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  render() {
    const { notesArray } = this.state;
    console.log(notesArray);
    return (
      <div className="app">
        <Header />
        <NavMenu />
        <div className="notes-area">
          <CreateNote onAdd={this.addNote} />

          {notesArray.map((note) => {
            return (
              <Note
                note={note}
                key={note.id}
                deleteNote={this.deleteNote}
                updateNote={this.updateNote}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
