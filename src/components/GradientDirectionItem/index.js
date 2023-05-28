// Write your code here
import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachGrad, changeDirection, isActive} = props
  const {displayText, value} = eachGrad
  console.log(isActive)
  const onBtnClick = () => {
    changeDirection(value)
  }

  return (
    <li>
      <DirectionButton type="button" onClick={onBtnClick} isActive={isActive}>
        {displayText}
      </DirectionButton>
    </li>
  )
}

export default GradientDirectionItem
