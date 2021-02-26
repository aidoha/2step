import ArrowSelect from '../../../icons/arrowSelect'
import { Wrap, Select, Text, Arrow } from './style'

const Select1 = props => {
  let element
  if (props.options) {
    element = props.options.map((item, idx) => {
      return (
        <option key={item.name} value={idx} selected={idx === props.active}>
          {item.name}
        </option>
      )
    })
  }
  return (
    <Wrap {...props}>
      <Select {...props}>
        <Text {...props}>{element[parseInt(props.active)]}</Text>
        <Arrow {...props}>
          <ArrowSelect />
        </Arrow>
      </Select>
      <select name={props.name}>{element}</select>
    </Wrap>
  )
}

export default Select1
