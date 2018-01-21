import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let Addition = ({ dispatch }) => {
  let inputData;

  return(
    <div>
      <form onSubmit={e=>{
        e.preventDefault()
        if(!inputData.value){
          return
        }
        dispatch(addTodo(inputData.value));
        inputData.value = '';
      }}>
        <input type="text" ref={input => {
          inputData = input
        }} />
        <button type="submit">Add Data</button>
      </form>
    </div>

  )

}

Addition = connect()(Addition);

export default Addition