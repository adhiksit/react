import React from 'react'
import Card from "./components(inside)/card.jsx"
import Navbar from './components(inside)/navbar.jsx'

const name = "Adhiksit"

const age = 19

const App = () => {
  return (
    <div>
      <h1>Hello Guys</h1>
      <br />
      <br />
      <br />
      <br />
      <div className='card'>
        <h1>Hi, my name is {name} and I am {age} years old.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, rerum.</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <p>
        <Card />
        <br />
        <br />
        <br />
        <br />
        <Navbar />
      </p>
    </div>
  );
}

export default App

