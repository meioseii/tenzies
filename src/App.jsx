import { useEffect, useState } from 'react'
import './App.css'
import Info from './Info.jsx'
import Dice from './Dice.jsx'
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
  
  function rollDice() {
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.isHeld ? die : 
          {id: nanoid(),
          value: Math.floor(Math.random() * 7),
          isHeld: false}
      })
    })
  }

  function holdDice(id) {
    setDice(prevDice => {
        return prevDice.map(die => {
          return (die.id === id) ? {...die, isHeld: !die.isHeld} : die
        })
    })
    console.log(id)
  }

  const allDice = dice.map(die => {
    return <Dice
              key={die.id}
              value={die.value}
              isHeld={die.isHeld}
              holdDice={() => holdDice(die.id)}
            />
  })

  return (
    <main>
      <Info />
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
