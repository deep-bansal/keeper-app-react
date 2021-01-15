import React, { Component } from 'react';
import { Header, Footer, Note } from './';
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
  render() {
    const { notesArray } = this.state;
    console.log(notesArray);
    return (
      <div>
        <Header />
        <CreateNote onAdd={this.addNote} />

        {notesArray.map((note) => {
          return (
            <Note note={note} key={note.id} deleteNote={this.deleteNote} />
          );
        })}

        <Footer />
      </div>
    );
  }
}

export default App;
