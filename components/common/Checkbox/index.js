import { Label, Input, Checkmark } from './style'

const Checkbox = props => {
  return (
    <Label color={props.color}>
      {props.children}
      <input
        type="checkbox"
        onChange={e => props.onChange(e, props.id, props.children)}
        checked={props.active}
        data-value={props.children}
        data-id={props.id}
      />
      <Checkmark />
    </Label>
  )
}

export default Checkbox
