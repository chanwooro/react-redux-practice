import React from 'react'
import Addition from '../containers/AddList'
import List from '../components/ListData'
import Filter from '../components/ListFilters'

const App = () => (
  <div>
    <Addition />
    <List />
    <Filter />
  </div>
)

export default App