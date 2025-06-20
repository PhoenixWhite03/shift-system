import { useState } from 'react'
import { TURN_PRIORITY, TURN_TYPE } from '../../models/constants.js'
import Turn from '../pure/turn.jsx'
import TurnQueue from './TurnQueue.jsx'
import TurnForm from '../pure/forms/TurnForm.jsx'
import AttentionPlace from './AttentionPlace.jsx'

const ShiftSystem = () => {
  const [turnQueue, setTurnQueue] = useState([])
  const [attendingTurns, setAttendingTurns] = useState([])
  const [attentionCount, setAttentionCount] = useState(
    {
      [TURN_PRIORITY.NORMAL]: 0,
      [TURN_PRIORITY.PARTICULAR]: 0,
      [TURN_PRIORITY.CHILD]: 0,
      [TURN_PRIORITY.OLDER]: 0,
      [TURN_PRIORITY.DISABLED]: 0
    }
  )

  function addTurn (id, priority, placeType) {
    setTurnQueue(prevTurns => [...prevTurns, { id, priority, placeType }])
  }

  function removeTurn (id) {
    setTurnQueue(prevTurns => prevTurns.filter(turn => turn.id !== id))
  }

  function addTurnToAttendingList (turnId) {
    const turn = turnQueue.find(t => t.id === turnId)
    if (turn) {
      setAttendingTurns(prevTurns => [...prevTurns, turn])
      removeTurn(turnId)
    }
  }

  function removeTurnFromAttendingList (turnId) {
    setAttendingTurns(prevTurns => prevTurns.filter(turn => turn.id !== turnId))
  }

  function handleTurnForm (e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const priority = data.get('priority')
    const id = `${priority}-${attentionCount[priority] + 1}`

    addTurn(id, priority, TURN_TYPE.CASHIER)

    setAttentionCount(prevCount => ({
      ...prevCount,
      [priority]: prevCount[priority] + 1
    }))
  }

  return (
    <main className='box-border flex size-full gap-16'>
      <section className='grid grid-cols-2 size-full gap-4 self-center'>
        <AttentionPlace
          id={0}
          type={TURN_TYPE.CASHIER}
          turnQueue={turnQueue}
          addTurn={addTurn}
          addTurnToAttendingList={addTurnToAttendingList}
          removeTurnFromAttendingList={removeTurnFromAttendingList}
        />
        <AttentionPlace
          id={0}
          type={TURN_TYPE.MODULE}
          turnQueue={turnQueue}
          addTurn={addTurn}
          addTurnToAttendingList={addTurnToAttendingList}
          removeTurnFromAttendingList={removeTurnFromAttendingList}
        />
        <AttentionPlace
          id={1}
          type={TURN_TYPE.CASHIER}
          turnQueue={turnQueue}
          addTurn={addTurn}
          addTurnToAttendingList={addTurnToAttendingList}
          removeTurnFromAttendingList={removeTurnFromAttendingList}
        />
        <AttentionPlace
          id={1}
          type={TURN_TYPE.MODULE}
          turnQueue={turnQueue}
          addTurn={addTurn}
          addTurnToAttendingList={addTurnToAttendingList}
          removeTurnFromAttendingList={removeTurnFromAttendingList}
        />
      </section>
      <section className='box-border flex flex-col w-full items-center'>
        <TurnQueue turns={attendingTurns} />
        <TurnForm id={0} addTurnCallback={handleTurnForm} />
      </section>
    </main>
  )
}

export default ShiftSystem
