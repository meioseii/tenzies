import { useEffect, useState } from 'react'
import './App.css'
import Dice from './Dice'
import { nanoid } from 'nanoid'

function App() {

  const [dice, setDice] = useState(allNewDice)

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(
        { id: nanoid(),
          value: Math.floor(Math.random() * 7),
          isHeld: false})
    }
    return newDice
  }

  const allDice = dice.map(die => {
    return <Dice 
              key={die.id}
              value={die.value}
            />
  })

  function rollDice() {
    setDice(allNewDice())
  }
  

  return (
    <main>
      <div className='dice-container'>
        {allDice}
      </div>
      <button 
        className='roll-button'
        onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
