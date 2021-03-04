import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";
import Rootreducer from "./store/Rootreducer";
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import {getFirebase,ReactReduxFirebaseProvider } from 'react-redux-firebase';
import {reactReduxFirebase,} from 'react-redux-firebase';
import firebaseConfig from "./config/fbConfig";

// const store = createStore(Rootreducer,
//   compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//   reduxFirestore(firebaseConfig)
//   )
// )
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

