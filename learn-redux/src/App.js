import React from 'react';
// import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">oiyoyioyi
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        {isLogged ? <h3>Private info, shouldn't be visible if not logged in.</h3> : ''}
    </div>
  );
}

export default App;
