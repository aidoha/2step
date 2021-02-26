import { Select, Wrap, SelectItem, SelectItems, Heading, Arrow } from './style'
import ArrowIcon from '../../icons/arrowSelect'

class SelectOne extends React.Component {
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
            {this.props.items.map((val, i) => (
              <SelectItem
                bg={this.props.bg}
                name={this.props.name}
                key={val}
                onClick={e => {
                  this.props.onChange(i, e)
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

export default SelectOne
