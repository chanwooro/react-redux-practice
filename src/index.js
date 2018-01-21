import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'

const red = createStore(reducer);
console.log('test');
render(
  <Provider store={red}>
    <App />
  </Provider>,
  document.getElementById("root")
)