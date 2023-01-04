import { useEffect, useState } from 'react'
import './App.css'
import Confetti from 'react-confetti'
import Info from './Info.jsx'
import Dice from './Dice.jsx'
import { nanoid } from 'nanoid'

function App() {

  const [dice, setDice] = useState(allNewDice)

  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstVal = dice[0].value
    const allValSame = dice.every(die => die.value === firstVal)
    if (allHeld && allValSame) {
      setTenzies(prevTenzies => !prevTenzies)
      console.log("You Won")
    }
  }, [dice])

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(newDiceSet())
    }
    return newDice
  }

  function newDiceSet() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 7),
      isHeld: false
    }
  }

  function newGame() {
    setDice(oldDice => {
      return oldDice.map(die => {
        return newDiceSet()
      })
    })
    setTenzies(prevTenzies => !prevTenzies)
  }
  
  function rollDice() {
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.isHeld ? die : newDiceSet()
      })
    })
  }

  function holdDice(id) {
    setDice(prevDice => {
        return prevDice.map(die => {
          return (die.id === id) ? {...die, isHeld: !die.isHeld} : die
        })
    })
  }

  const allDice = dice.map(die => {
    return <Dice
              key={die.id}
              value={die.value}
              isHeld={die.isHeld}
              holdDice={() => holdDice(die.id)}
              disable={tenzies}
            />
  })

  return (
    <main>
      {tenzies && <Confetti/>}
      <Info />
      <div className='dice-container'>
        {allDice}
      </div>
      <button 
        className='roll-button'
        onClick={tenzies ? newGame : rollDice}>{tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}

export default App
