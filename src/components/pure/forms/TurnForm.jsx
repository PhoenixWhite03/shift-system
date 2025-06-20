import { TURN_PRIORITY, TURN_TYPE } from '../../../models/constants'
import DynamicSelect from '../DynamicSelect'

const TurnForm = ({ id, addTurnCallback }) => {
  return (
    <form
      className='box-border w-max p-10 flex flex-col place-items-center gap-6'
      onSubmit={addTurnCallback}
    >
      <h2>Create a new turn</h2>
      <div className='flex flex-col gap-4 w-full'>
        <label className='flex flex-col items-start'>
          Priority:
          <DynamicSelect
            name='priority'
            obj={TURN_PRIORITY}
            keyPrefix={id}
          />
        </label>
        <button type='submit' className='p-2 rounded'>Create</button>
      </div>
    </form>
  )
}

export default TurnForm
