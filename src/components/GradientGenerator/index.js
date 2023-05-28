import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Main,
  UlList,
  Direction,
  GenerateButton,
  Colors,
  Heading,
  Div,
  Para,
  SubHead,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    currentVal: gradientDirectionsList[0].value,
    gardientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onColorSelect1 = event => {
    this.setState({
      color1: event.target.value,
    })
  }

  onColorSelect2 = event => {
    this.setState({
      color2: event.target.value,
    })
  }

  changeDirection = value => {
    this.setState({
      currentVal: value,
    })
  }

  onGrnerate = () => {
    const {color1, color2, currentVal} = this.state
    this.setState({
      gardientValue: `to ${currentVal}, ${color1}, ${color2}`,
    })
  }

  render() {
    const {color1, color2, gardientValue, currentVal} = this.state
    // console.log(currentVal)
    return (
      <Main gardientValue={gardientValue} data-testid="gradientGenerator">
        <div>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Direction>
            <SubHead>Choose Direction</SubHead>
            <UlList>
              {gradientDirectionsList.map(eachGrad => (
                <GradientDirectionItem
                  key={eachGrad.directionId}
                  eachGrad={eachGrad}
                  changeDirection={this.changeDirection}
                  isActive={currentVal === eachGrad.value}
                />
              ))}
            </UlList>
          </Direction>
          <Direction>
            <SubHead>Pick the Colors</SubHead>
            <Colors>
              <Div>
                <Para>{color1}</Para>
                <input
                  value={color1}
                  type="color"
                  onChange={this.onColorSelect1}
                />
              </Div>
              <Div>
                <Para>{color2}</Para>
                <input
                  value={color2}
                  type="color"
                  onChange={this.onColorSelect2}
                />
              </Div>
            </Colors>
            <Div>
              <GenerateButton type="button" onClick={this.onGrnerate}>
                Generate
              </GenerateButton>
            </Div>
          </Direction>
        </div>
      </Main>
    )
  }
}

export default GradientGenerator
