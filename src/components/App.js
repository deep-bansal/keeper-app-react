import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, NavMenu, Home, DeletedNotes } from './';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArray: [],
      pinNotes: [],
      deletedNotes: [],
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
      const deletedNotes = array.filter((note) => note.deleteNote === true);
      const notesArray = array.filter(
        (note) => note.pinNote !== true && note.deleteNote !== true
      );
      this.setState({
        notesArray,
        pinNotes,
        deletedNotes,
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
    } else if (tagName === 'deleteNote') {
      docRef
        .update(
          {
            deleteNote: val,
            pinNote: false,
          },
          { merge: true }
        )
        .then()
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  };
  deleteNoteForever = (note) => {
    const docRef = this.db.collection('Notes').doc(note.id);
    docRef
      .delete()
      .then()
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  render() {
    const { notesArray, pinNotes, deletedNotes } = this.state;
    console.log(notesArray, pinNotes, deletedNotes);
    return (
      <Router>
        <div className="app">
          <Header toExpandNavMenu={this.toExpandNavMenu} />
          <NavMenu expandNavMenu={this.state.expandNavMenu} />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return (
                  <Home
                    addNote={this.addNote}
                    pinNotes={this.state.pinNotes}
                    notesArray={this.state.notesArray}
                    updateNote={this.updateNote}
                  />
                );
              }}
            />
            <Route
              exact
              path="/deletedNotes"
              render={(props) => {
                return (
                  <DeletedNotes
                    deletedNotes={this.state.deletedNotes}
                    deleteNoteForever={this.deleteNoteForever}
                    updateNote={this.updateNote}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
