import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import App from './App';

import firebase from 'firebase/app'
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDRmtNehNCpXLcP3kbMX8rEYwYXsWrb8zI",
  authDomain: "info340c-au18-demo.firebaseapp.com",
  databaseURL: "https://info340c-au18-demo.firebaseio.com",
  projectId: "info340c-au18-demo",
  storageBucket: "info340c-au18-demo.appspot.com",
  messagingSenderId: "411543237771"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));