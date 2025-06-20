import { useState } from 'react'
import { TURN_TYPE } from '../../models/constants'
import Turn from '../pure/turn'

const AttentionPlace = ({ id, type, turnQueue, addTurn, addTurnToAttendingList, removeTurnFromAttendingList }) => {
  const [currentTurn, setCurrentTurn] = useState(null)

  const handleOnClick = () => {
    if (currentTurn) {
      // If there is a turn

      if (type === TURN_TYPE.CASHIER) {
        // If the current turn is a cashier
        // we automatically add a new turn with the same information,
        // but for module
        addTurn(currentTurn.id, currentTurn.priority, TURN_TYPE.MODULE)
      }

      // Remove the current turn from the queue
      removeTurnFromAttendingList(currentTurn.id)
    }

    // Search for a turn in the queue
    const nextTurn = turnQueue.find(turn => turn.placeType === type && !turn.attended)

    if (nextTurn) {
      addTurnToAttendingList(nextTurn.id)
    }

    // If there is no turn, set currentTurn to null
    setCurrentTurn(nextTurn || null)
  }

  return (
    <div className='box-border size-full flex flex-col items-center gap-3'>
      <h2 className='capitalize'>{type} {id}</h2>
      <Turn
        id={currentTurn ? currentTurn.id : 'Waiting...'}
        priority={currentTurn ? currentTurn.priority : ''}
        placeType={type}
        placeId={id}
      />
      <button onClick={handleOnClick}>
        {
          !currentTurn
            ? <span>Start</span>
            : <span>Next</span>
        }
      </button>
    </div>
  )
}

export default AttentionPlace
