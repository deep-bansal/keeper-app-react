import React, { Component } from 'react';
import { Header, Footer, Note } from './';
import CreateNote from './CreateNote';
import firebase from 'firebase';

var count = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArray: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('Notes')
      .get()
      .then((snapshot) => {
        // console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

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
    const note = {
      title: title,
      content: content,
      id: count,
    };
    count++;
    const newNotesArr = [...this.state.notesArray, note];
    this.setState({
      notesArray: newNotesArr,
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
