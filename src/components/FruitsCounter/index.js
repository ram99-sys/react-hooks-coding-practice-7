import {useState} from 'react'
import './index.css'

const FruitsCounter = () => {
  const [bananaCount, setBananaCount] = useState(0)
  const [mangoCount, setMangoCount] = useState(0)

  const onClickEatMangoButton = () => {
    setMangoCount(prevState => prevState + 1)
  }

  const onClickEatBananaButton = () => {
    setBananaCount(prevState => prevState + 1)
  }

  return (
    <div className="fruitCounter-bg-container">
      <div className="fruit-counter-container">
        <h1 className="heading">
          Bob ate <span className="mango-color">{mangoCount}</span> mangoes
          <span className="banana-color"> {bananaCount}</span> bananas
        </h1>
        <div className="fruits-container">
          <div className="mango-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="mango-alignment"
            />
            <button
              className="button"
              type="button"
              onClick={onClickEatMangoButton}
            >
              Eat Mango
            </button>
          </div>
          <div className="banana-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="banana-alignment"
            />
            <button
              className="button"
              type="button"
              onClick={onClickEatBananaButton}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FruitsCounter
