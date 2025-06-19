import { TURN_PRIORITY } from '../../models/constants'

const Turn = ({ id, priority, type }) => {
  const typeClass = {
    [TURN_PRIORITY.NORMAL]: 'bg-blue-500',
    [TURN_PRIORITY.PARTICULAR]: 'bg-green-500',
    [TURN_PRIORITY.CHILD]: 'bg-yellow-500',
    [TURN_PRIORITY.OLDER]: 'bg-yellow-500',
    [TURN_PRIORITY.DISABLED]: 'bg-pink-500'
  }

  return (
    <li className={`${typeClass[priority] || 'bg-gray-500'} list-none box-border p-3 rounded flex flex-col place-content-center gap-1 min-w-1/2 w-max text-white`}>
      <p className='uppercase text-3xl font-bold'>{id}</p>
      <p className='lowercase'>{type}</p>
    </li>
  )
}

export default Turn
