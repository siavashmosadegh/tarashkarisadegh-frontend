import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import authReducer from './store/reducers/auth';
import contactdataReducer from './store/reducers/contactdata';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAFdFPze6WE0pt-MdL_DhKJV3lL4b7S1s",
  authDomain: "tarashkari-test-one.firebaseapp.com",
  databaseURL: "https://tarashkari-test-one-default-rtdb.firebaseio.com",
  projectId: "tarashkari-test-one",
  storageBucket: "tarashkari-test-one.appspot.com",
  messagingSenderId: "486982744248",
  appId: "1:486982744248:web:0279d66e76d923acb79c4d",
  measurementId: "G-TYMS672NPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//import reportWebVitals from './reportWebVitals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    //burgerBuilder: burgerBuilderReducer,
    //order: orderReducer,
    auth: authReducer,
    contactdata: contactdataReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title="تراشکاری صادق"/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
