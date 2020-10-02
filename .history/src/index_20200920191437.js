import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import { BrowserRouter } from 'react-router-dom'
import "./firebase"
import Routes from './routes';
import { firebase } from './firebase';
const App = () => {
  return (

    <BrowserRouter>
      <Routes />
    </BrowserRouter>

  )
}
firebase.auth().onAuthStateChanged(() => {

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

})
