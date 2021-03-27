import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFOswI311nR_yddgzxupfvGbcrKVhFtvs",
  authDomain: "spaceninjas-c47a5.firebaseapp.com",
  databaseURL: "https://spaceninjas-c47a5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spaceninjas-c47a5",
  storageBucket: "spaceninjas-c47a5.appspot.com",
  messagingSenderId: "582212705864",
  appId: "1:582212705864:web:69ad886594dd4faab7c27d"
};
  
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
