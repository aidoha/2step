import { Label, Input, Checkmark } from './style'

const RadioButton = ({ color, height, onClick, checked, bg, children, active }) => {
  return (
    <Label color={color} height={height} onClick={onClick}>
      {children}
      <Input type="radio" name="one" checked={checked || active}/>
      <Checkmark bg={bg} />
    </Label>
  )
}

export default RadioButton