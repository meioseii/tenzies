import { useEffect, useState } from 'react'
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

  const allDice = dice.map(die => {
    return <Dice value={die}/>
  })

  function handleClick() {
    setDice(allNewDice())
  }
  

  return (
    <main>
      <div className='dice-container'>
        {allDice}
      </div>
      <button 
        className='roll-button'
        onClick={handleClick}>Roll</button>
    </main>
  )
}

export default App
