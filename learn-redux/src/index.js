import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';

// import * as serviceWorker from './serviceWorker';
// import {createStore} from 'redux';

// const store = createStore(counterReducer, isLoggedReducer)
const store = createStore(allReducers);

// //STORE
// //store is a globalized state, it holds all the data or state for an application


// //ACTION
// //example: to increment a value with a click of a button
// //simple fuction that returns an object
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// //REDUCER
// //describes how your actions affect your next state or stored info
// const counter = (state = 0, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//     }
// }

// let store = createStore(counter);

// //DISPATCH
// //
// store.dispatch(increment());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorker.unregister();