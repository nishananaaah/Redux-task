import { useState } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import TodoList from './TodoList'
import Store from './Store'

function App() {
 

  return (
    <>
    <Provider store={Store}>
      <TodoList/>
    </Provider>
    </>
  )
}

export default App
