import {useReducer} from 'react';
import React from 'react'

const initialState = {
  firstCounter : 0,
  secondCounter : 10,
  therdCounter : 20,
}




const reducer = (state, action) => {

  switch(action.type) {
    case 'Increment':
      return {...state, firstCounter : state.firstCounter + action.value};
    case 'Decrement':
      return {...state, firstCounter : state.firstCounter - action.value};
    case 'Increment_5':
      return {...state, secondCounter : state.secondCounter + action.value};
    case 'Decrement_5':
      return {...state, secondCounter : state.secondCounter - action.value};
    case 'Increment_10':
      return {...state, therdCounter : state.therdCounter + action.value};
    case 'Decrement_10':
      return {...state, therdCounter : state.therdCounter - action.value};
    case 'Reset':
      return initialState
    default:
      return state
  }
}

function Test2() {
    const [counte, dispatch] = useReducer(reducer, initialState);

  
    return (
      <div>
        <h2>{counte.firstCounter}</h2>
        <h2>{counte.secondCounter}</h2>
        <h2>{counte.therdCounter}</h2>
        <button  onClick={() => dispatch({type : 'Increment', value : 1})}>Increment</button>
        <button  onClick={() => dispatch({type : 'Decrement', value : 1})}>Decrement</button>
        <button  onClick={() => dispatch({type : 'Increment_5', value : 5})}>Increment Five Times</button>
        <button  onClick={() => dispatch({type : 'Decrement_5', value : 5})}>Decrement Five Times</button>
        <button  onClick={() => dispatch({type : 'Increment_10', value : 10})}>Increment Ten Times</button>
        <button  onClick={() => dispatch({type : 'Decrement_10', value : 10})}>Decrement Ten Times</button>
        <button  onClick={() => dispatch({type : 'Reset', value : 0})}> Reset </button>
      </div>
    )
  }

export default Test2