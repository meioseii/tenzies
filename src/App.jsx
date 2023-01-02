import { useState } from 'react'
import './App.css'
import Dice from './Dice'

function App() {

  return (
    <main>
      <div className='dice-container'>
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
      </div>
    </main>
  )
}

export default App
