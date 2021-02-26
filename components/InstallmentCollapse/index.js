import {
  Wrap,
  Collapse,
  Header,
  Name,
  Description,
  Monthes,
  Month,
  CheckBoxes
} from './style'
import BoldArrow from '../icons/boldArrow'
import Checkbox from '../common/Checkbox'

class InstallmentCollapse extends React.Component {
  state = {
    active: true,
    monthStatus: '3'
  }

  onActiveChange = () => {
    this.setState({ active: !this.state.active })
  }

  monthStatusHandler = e => {
    const month = e.target.getAttribute('id')
    this.setState({ monthStatus: month })
  }

  render() {
    return (
      <Wrap>
        <Collapse>
          <Header
            onClick={() => this.onActiveChange()}
            active={this.state.active}>
            <Name>Рассрочка</Name>
            <BoldArrow rotate={(this.state.active && '0') || '180'} />
          </Header>
          <Description isOpen={this.state.active}>
            <Monthes>
              <Month
                id="3"
                onClick={this.monthStatusHandler}
                active={this.state.monthStatus === '3'}>
                3 мес
              </Month>
              <Month
                id="6"
                onClick={this.monthStatusHandler}
                active={this.state.monthStatus === '6'}>
                6 мес
              </Month>
              <Month
                id="9"
                onClick={this.monthStatusHandler}
                active={this.state.monthStatus === '9'}>
                9 мес
              </Month>
              <Month
                id="12"
                onClick={this.monthStatusHandler}
                active={this.state.monthStatus === '12'}>
                12 мес
              </Month>
            </Monthes>
            <CheckBoxes>
              <Checkbox color="#F18E67">Home Credit Bank</Checkbox>
              <Checkbox color="#F18E67">Homebank Orange</Checkbox>
            </CheckBoxes>
          </Description>
        </Collapse>
      </Wrap>
    )
  }
}

export default InstallmentCollapse
