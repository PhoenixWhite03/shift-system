import './App.css'
import TurnQeue from './components/container/TurnQeue.jsx'
import Turn from './components/pure/turn.jsx'
import { TURN_PRIORITY, TURN_TYPE } from './models/constants.js'

function App () {
  return (
    <>
      <h1>Shift System</h1>
      <TurnQeue />
    </>
  )
}

export default App
