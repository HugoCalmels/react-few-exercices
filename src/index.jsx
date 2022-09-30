import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import Formulaire from './components/Formulaire/index';
import { useState } from 'react'
import MealDB from './components/MealDB'
import Pendu from './components/Pendu'

const App = () => {
  
  const [text, setText] = useState("")

  const changeText = (event) => {

    setText(event.target.value.toLowerCase())


  }

 
  return (
    <div className="app">
      <Formulaire changeText={changeText} text={text} />
      <hr />
      <MealDB />
      <hr />
      <Pendu />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));