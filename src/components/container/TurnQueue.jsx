import { TURN_PRIORITY, TURN_TYPE } from '../../models/constants'
import Turn from '../pure/turn'

const TurnQueue = ({ turns }) => {
  return (
    <section className='box-border size-fit p-10 flex flex-col place-items-center gap-2 bg-gray-900 text-white rounded outline-5 outline-blue-950'>
      <h2>Turns:</h2>
      <ol className='list-none box-border w-full py-10 flex flex-col place-items-center gap-6'>
        {
          turns && turns.length > 0
            ? (turns.map(turn => {
                return (
                  <Turn
                    key={turn.id}
                    id={turn.id}
                    priority={turn.priority}
                    placeType={turn.placeType}
                    placeId={turn.placeId}
                  />
                )
              }))
            : <p className='text-2xl'>No turns in the queue</p>
        }
      </ol>
    </section>
  )
}

export default TurnQueue
