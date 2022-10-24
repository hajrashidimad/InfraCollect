import { useState, useReducer } from 'react';
import React from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'Increment':
      return state + 1
    case 'Decrement':
      return state -1
      case 'Reset':
        return initialState
    default:
      return state
  }
}

const Test = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const [counte, dispatch] = useReducer(reducer, initialState);


  // useEffect(() => {
  //   console.log('Clicked')
  //   document.title = count
  // },[posts])



  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <h4>{name}</h4>
      {/* <button onClick={() => setCount(count => count +1)}> You clicked me {count} Times</button> */}
      <h2>{count}</h2>
      <button  onClick={() => setCount(count => count +1)}>Increment</button>
      <button  onClick={() => setCount(count => count -1)}>Decrement</button>
      <button  onClick={() => setCount(0)}> Reset </button>
      <h2>{counte}</h2>
      <button  onClick={() => dispatch('Increment')}>Increment</button>
      <button  onClick={() => dispatch('Decrement')}>Decrement</button>
      <button  onClick={() => dispatch('Reset')}> Reset </button>
    </div>
  )
}

export default Test