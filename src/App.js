import React from 'react';
import Counter  from './components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.scss';

const initialState = {
  count: 0
};

function reducer (state = initialState, action) {
  switch(action.type) {
    case "INCREMENT": 
      return {
        count: state.count + 1
      }
    case "DECREMENT": 
      return {
        count: state.count - 1
      }
    case "RESET":
      return {
        count: 0
      }
    default:
      return state;
  }
}
  
const store =  createStore(reducer);

// store.dispatch({
//   type: "INCREMENT",
// });

// store.dispatch({
//   type: "DECREMENT"
// })

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
