import { Select, Wrap, SelectItem, SelectItems, Heading, Arrow } from './style'
import ArrowIcon from '../../icons/arrowSelect'

class SelectTwo extends React.Component {
  state = {
    active: false
  }

  activeHandler = status => {
    this.setState({ active: status })
  }

  render() {
    return (
      <Wrap
        {...this.props}
        onMouseLeave={() => this.activeHandler(false)}
        active={this.state.active}>
        <Select>
          <Heading onClick={() => this.activeHandler(true)}>
            {this.props.items[this.props.active]}
            <Arrow>
              <ArrowIcon />
            </Arrow>
          </Heading>
          <SelectItems active={this.state.active}>
            {this.props.items.map(val => (
              <SelectItem
                name={this.props.name}
                key={val}
                onClick={() => {
                  this.props.onChange(val.id)
                  this.activeHandler(false)
                }}>
                {val}
              </SelectItem>
            ))}
          </SelectItems>
        </Select>
      </Wrap>
    )
  }
}

export default SelectTwo
