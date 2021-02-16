import React, { useReducer, useState } from 'react';
import reducer, { initialState } from '../../reducers/colorReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = ({ target }) => {
    dispatch({
      type: target.id,
      payload: target.value
    });
  };

  const handleClick = ({ target }) => {
    dispatch({
      type: target.id
    });
  };

  return (
    <>
      <button id="UNDO" onClick={handleClick}>undo</button>
      <button id="REDO" onClick={handleClick}>redo</button>
      <input 
        id="RECORD"
        type="color" 
        alt="Color Picker" 
        value={state.current} 
        onChange={handleChange} 
      />
      <div 
        data-testid="Color Result" 
        style=
          {{ 
            backgroundColor: state.current, 
            width: '10rem', 
            height: '10rem' 
          }}>  
      </div>
    </>
  );
}

export default App;
