import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions' 

let Filter = ({ dispatch }) => (
  <ul>
    <li onClick={()=>{dispatch(setFilter('ALL'))}}>All</li>
    <li onClick={()=>{dispatch(setFilter('COMPLETE'))}}>Complete</li>
    <li onClick={()=>{dispatch(setFilter('INCOMPLETE'))}}>Incomplete</li>
  </ul>
)




Filter = connect()(Filter);
export default Filter;