import React, { Component } from 'react';
import { Header, Footer, Note, NavMenu } from './';
import CreateNote from './CreateNote';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArray: [],
      pinNotes: [],
      expandNavMenu: false,
    };

    this.db = firebase.firestore();
  }

  toExpandNavMenu = () => {
    if (this.state.expandNavMenu) {
      this.setState({
        expandNavMenu: false,
      });
    } else {
      this.setState({
        expandNavMenu: true,
      });
    }
  };

  componentDidMount() {
    this.db.collection('Notes').onSnapshot((snapshot) => {
      const array = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      const pinNotes = array.filter((note) => note.pinNote === true);
      const notesArray = array.filter((note) => note.pinNote !== true);
      this.setState({
        notesArray,
        pinNotes,
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

  updateNote = (tagName, val, note) => {
    const docRef = this.db.collection('Notes').doc(note.id);
    if (tagName === 'h1') {
      docRef
        .update({
          title: val,
        })
        .then()
        .catch((error) => {
          console.log('Error:', error);
        });
    } else if (tagName === 'p') {
      docRef
        .update({
          content: val,
        })
        .then()
        .catch((error) => {
          console.log('Error:', error);
        });
    } else if (tagName === 'color-divs') {
      docRef
        .update(
          {
            color: val,
          },
          { merge: true }
        )
        .then()
        .catch((error) => {
          console.log('Error:', error);
        });
    } else if (tagName === 'pinNote') {
      docRef
        .update(
          {
            pinNote: val,
          },
          { merge: true }
        )
        .then()
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  };

  render() {
    const { notesArray, pinNotes } = this.state;
    console.log(notesArray, pinNotes);
    return (
      <div className="app">
        <Header toExpandNavMenu={this.toExpandNavMenu} />
        <NavMenu expandNavMenu={this.state.expandNavMenu} />
        <div className="notes-area">
          <CreateNote onAdd={this.addNote} />

          {pinNotes.length > 0 && <h2>Pinned</h2>}
          {pinNotes.length > 0 && (
            <div className="pinned">
              {pinNotes.map((note) => {
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
          )}
          <br></br>
          {pinNotes.length > 0 && <h2>Others</h2>}
          <div className="others">
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
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
