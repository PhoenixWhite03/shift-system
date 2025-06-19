import { TURN_PRIORITY, TURN_TYPE } from '../../models/constants'
import Turn from '../pure/turn'

const TurnQeue = () => {
  const generateRandomTurn = (key = 1) => {
    const priority = Object.values(TURN_PRIORITY)[Math.floor(Math.random() * Object.values(TURN_PRIORITY).length)]
    const type = Object.values(TURN_TYPE)[Math.floor(Math.random() * Object.values(TURN_TYPE).length)]

    return (
      <Turn
        key={key}
        id={`${priority}-${Math.floor(Math.random() * 300)}`}
        priority={priority}
        type={type}
      />
    )
  }

  return (
    <section className='box-border mt-16 w-full py-10 flex flex-col place-items-center gap-2 bg-gray-900 text-white rounded outline-5 outline-blue-950'>
      <h2>Turns:</h2>
      <ol className='box-border w-full py-10 flex flex-col place-items-center gap-6'>
        {
          Array.from({ length: 10 }, (_, index) => (
            generateRandomTurn(index + 1)
          ))
        }
      </ol>
    </section>
  )
}

export default TurnQeue
