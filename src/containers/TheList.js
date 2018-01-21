import React from 'react'

let TheList = ({text, complete, onClick}) => (
    <li
      onClick ={onClick}
      style={{textDecoration: complete ? 'line-through' : 'none'}}
    >
      {text}
    </li>
)

export default TheList;