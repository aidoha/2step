import Close from '../../icons/close'
import Select1 from '../Select/Select1'
import Input1 from '../Input/Input1'
import InputRange from '../Input/InputRange'
import Checkbox from '../Checkbox'
import SelectOne from '../SelectOne'
import SelectTwo from '../SelectTwo'
import Button from '../Button'
import InputMask from 'react-input-mask'
import data from '../../finance/CreditFilter/data'
import {
  Wrap,
  Bg,
  Modal,
  Title,
  Wrapper,
  Block,
  Text,
  Inputs,
  CheckboxWrapper,
  ButtonWrapper,
  Btn
} from './style'

const Popup = props => {
  let form
  if (props.sumrangeValue.toString().length === 3) {
    form = '999 9'
  } else if (props.sumrangeValue.toString().length === 4) {
    form = '9 9999'
  } else if (props.sumrangeValue.toString().length === 5) {
    form = '99 9999'
  } else if (props.sumrangeValue.toString().length === 6) {
    form = '999 9999'
  } else if (props.sumrangeValue.toString().length === 7) {
    form = '9 999 9999'
  } else {
    form = '99 999 999'
  }
  let type = []
  type = props.data.map(item => {
    return item.name
  })
  let month = []
  month = data.map(item => {
    return item.name
  })
  let cities = []
  cities = props.cities.map(item => {
    return item.name
  })
  return (
    <Wrap>
      <Bg onClick={props.showPopupHandler} />
      <Modal>
        <Title>Все условия</Title>
        <Btn onClick={props.showPopupHandler}>
          <Close />
        </Btn>
        <Wrapper>
          <Block>
            <Text>Вид кредита</Text>
            {/* <Select1
              width="260px"
              options={props.data}
              active={props.activeCreditType}
              name="activeCreditType"
              onChange={props.changeValueHandler}
            /> */}
            <SelectOne
              bg="rgba(61, 196, 126, 0.3)"
              name="activeCreditType"
              width="260px"
              onChange={props.selectHandler}
              active={props.activeCreditType}
              items={type}
            />
          </Block>
          <Block>
            <Text>Какая сумма вам нужна?</Text>
            <Inputs>
              <InputMask
                mask={form}
                maskChar={null}
                width="260px"
                value={props.sumrangeValue}
                name="sumrangeValue"
                onChange={props.changeValueHandler}
              />
              <InputRange
                max="1000000"
                value={props.sumrangeValue}
                name="sumrangeValue"
                onChange={props.changeValueHandler}
              />
            </Inputs>
          </Block>
          <Block>
            <Text>На какой срок?</Text>
            {/* <Select1
              width="260px"
              options={data}
              active={props.activeMonth}
              name="activeMonth"
              onChange={props.changeValueHandler}
            /> */}
            <SelectOne
              bg="rgba(61, 196, 126, 0.3)"
              name="activeMonth"
              width="260px"
              onChange={props.selectHandler}
              active={props.activeMonth}
              items={month}
            />
          </Block>
          {/* <Block>
            <Text>Цель кредита</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activeCreditAim}
              name="activeCreditAim"
              onChange={props.changeValueHandler}
            />
          </Block> */}
          <Block>
            <Text>Ваш город</Text>
            {/* <Select1
              width="260px"
              options={props.cities}
              active={props.activeCity}
              name="activeCity"
              onChange={props.changeValueHandler}
            /> */}
            <SelectOne
              bg="rgba(61, 196, 126, 0.3)"
              name="activeCity"
              width="260px"
              onChange={props.selectCityHandler}
              active={localStorage.city ? localStorage.city : props.activeCity}
              items={cities}
            />
          </Block>
          {/* <Block>
            <Text>Залог</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activePledge}
              name="activePledge"
              onChange={props.changeValueHandler}
            />
          </Block>
          <Block>
            <Text>Поручительство</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activeSurety}
              name="activeSurety"
              onChange={props.changeValueHandler}
            />
          </Block>
          <Block>
            <Text>Подтверждение дохода</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activeProof}
              name="activeProof"
              onChange={props.changeValueHandler}
            />
          </Block>
          <Block>
            <Text>Форма выдачи</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activeForm}
              name="activeForm"
              onChange={props.changeValueHandler}
            />
          </Block>
          <Block>
            <Text>Срок рассмотрения</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activePeriod}
              name="activePeriod"
              onChange={props.changeValueHandler}
            />
          </Block>
          <Block>
            <Text>Регистрация</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activeRegistration}
              name="activeRegistration"
              onChange={props.changeValueHandler}
            />
          </Block>
          <Block>
            <Text>Возраст заемщика</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activeAge}
              name="activeAge"
              onChange={props.changeValueHandler}
            />
          </Block>
          <Block>
            <Text>Общий трудовой стаж</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activeExperience}
              name="activeExperience"
              onChange={props.changeValueHandler}
            />
          </Block>
          <Block>
            <Text>Стаж на последнем рабочем месте</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activeLastExperience}
              name="activeLastExperience"
              onChange={props.changeValueHandler}
            />
          </Block>
          <Block>
            <Text>Категория заемщика</Text>
            <Select1
              width="260px"
              options={props.data}
              active={props.activeCategory}
              name="activeCategory"
              onChange={props.changeValueHandler}
            />
          </Block> */}
        </Wrapper>
        {/* <CheckboxWrapper>
          <Checkbox color="#4C8869">Личное страхование заемщика</Checkbox>
        </CheckboxWrapper> */}
        <ButtonWrapper>
          <Button
            width="188px"
            height="40px"
            round="20px"
            color="#4C8869"
            btnFont="#fff"
            right="30px"
            onClick={() => {
              props.showPopupHandler()
              props.cityChangeHandler()
            }}>
            Показать
          </Button>
          <Button
            width="188px"
            height="38px"
            round="20px"
            color="#fff"
            fontColor="#4C8869"
            border="1px solid #4C8869"
            onClick={props.resetHandler}>
            Сбросить фильтры
          </Button>
        </ButtonWrapper>
      </Modal>
    </Wrap>
  )
}

export default Popup
