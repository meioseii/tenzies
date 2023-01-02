import { useState } from 'react'
import './App.css'
import Dice from './Dice'

function App() {

  const [dice, setDice] = useState(allNewDice)

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 7))
    }
    return newDice
  }

  const dieElements = dice.map(die => <Dice value={die}/>)

  return (
    <main>
      <div className='dice-container'>
        {dieElements}
      </div>
    </main>
  )
}

export default App
