import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import firebase from 'firebase/app';
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACnPzG0pVf3kv5360WVjzqodekwC8DHco',
  authDomain: 'keeper-notes-app.firebaseapp.com',
  projectId: 'keeper-notes-app',
  storageBucket: 'keeper-notes-app.appspot.com',
  messagingSenderId: '449469838232',
  appId: '1:449469838232:web:fcdb4c259e3048f2e6b1ed',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
