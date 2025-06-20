/**
 * A dynamic select component that generates options based on an object.
 * @component
 * @example
 * const options = { Apple: 'apple', Banana: 'banana' };
 * return <DynamicSelect obj={options} keyPrefix="fruit" styles="my-custom-class" />
 * @param {Object} props - Component properties.
 * @param {Object} props.obj - An object where keys are option labes and values are option values.
 * @param {string} props.keyPrefix - A prefix for the keys of the options to ensure uniqueness.
 * @param {string} [props.styles] - Optional styles to apply to the select element. These are applied as a className.
 * @returns {JSX.Element} A rendered <select> element with dynamic options.
 */
const DynamicSelect = ({ name, obj, keyPrefix, styles }) => {
  return (
    <select name={name} className={styles || 'bg-gray-800 p-2 rounded self-center lowercase w-full'}>
      {
        Object.entries(obj).map(([key, value], index) => (
          <option
            className='lowercase'
            key={`${keyPrefix}-${value}${index}`}
            value={value}
          >
            {key}
          </option>
        ))
      }
    </select>
  )
}

export default DynamicSelect
