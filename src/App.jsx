import './App.css'
import ShiftSystem from './components/container/ShiftSystem.jsx'
import { TURN_PRIORITY, TURN_TYPE } from './models/constants.js'

function App () {
  return (
    <>
      <h1>Shift System</h1>
      <ShiftSystem />
    </>
  )
}

export default App
