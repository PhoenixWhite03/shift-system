import { TURN_PRIORITY } from '../../models/constants'

const Turn = ({ id, priority, placeType, placeId }) => {
  const typeClass = {
    [TURN_PRIORITY.NORMAL]: 'bg-blue-500',
    [TURN_PRIORITY.PARTICULAR]: 'bg-green-500',
    [TURN_PRIORITY.CHILD]: 'bg-yellow-500',
    [TURN_PRIORITY.OLDER]: 'bg-yellow-500',
    [TURN_PRIORITY.DISABLED]: 'bg-pink-500'
  }

  return (
    <li className={`turn ${typeClass[priority] || 'bg-gray-500'}`}>
      <p className='uppercase text-xs font-bold'>{id}</p>
      <p className='lowercase text-xs'>{placeType} {placeId}</p>
    </li>
  )
}

export default Turn
