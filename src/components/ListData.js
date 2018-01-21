import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TheList from '../containers/TheList'

let List = ({listData, clickedOnList}) => (
  <ul>
    {listData.map(data => <TheList onClick={()=>clickedOnList(data.id)} key={data.id} {...data} />)}
  </ul>
)
const filteringData = (lists, filters) =>{
  switch(filters){
    case "ALL":
      return lists
    case "COMPLETE":
      return lists.filter(x => x.complete)
    case "INCOMPLETE":
      return lists.filter(x => !x.complete)
    default:
      return lists
  }
}

const mapStateToProps = (state) => ({
  listData: filteringData(state.todos, state.filters)   
});

const mapDispatchToProps = {
  clickedOnList: toggleTodo
}

List = connect(mapStateToProps, mapDispatchToProps)(List);
export default List;