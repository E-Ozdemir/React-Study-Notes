import React from 'react'
import "./App.css"
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './redux/Reducer'
import initialState from './redux/Store'

const store = createStore(reducer,initialState);

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>React Redux</h1>
        <ComponentA/>
        <ComponentB/>
      </div>
    </Provider>
    )
}
export default App
