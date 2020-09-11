import React, { useState } from 'react'
import styles from './ProductCard.module.scss'
import PropTypes from 'prop-types'
import AmountOfProducts from '../AmountOfProducts'
import ProductInitialDescription from '../ProductInitialDescription/ProductInitialDescription'


const ProductCard = props => {
  const { taste, weight, description, amount, mouseBonus, note, isDisabled } = props;
  const { selected, disabledText } = description

  const [isCardSelected, setIsCardSelected] = useState(false)
  const [isMouseEnter, setIsMouseEnter] = useState(false)
  const [isFirstMouseEnter, setIsFirstMouseEnter] = useState(true)

  const handleToggleCardSelection = () => !isDisabled ? setIsCardSelected(!isCardSelected) : null
  const handleMouseEnterCard = () => isCardSelected ? isFirstMouseEnter ? setIsFirstMouseEnter(true) : setIsMouseEnter(true) : setIsFirstMouseEnter(false)
  const handleOnMouseLeaveCard = () => isCardSelected ? setIsMouseEnter(false) : isMouseEnter

  // const handleToggleCardSelection = () => {
  //   setIsCardSelected(!isCardSelected)
  //   isCardSelected ? setIsFirstMouseEnter(true) : setIsFirstMouseEnter(false)
  // }
  // const handleMouseEnterCard = () => isCardSelected ? isFirstMouseEnter ? setIsFirstMouseEnter(false) : setIsMouseEnter(true) : null
  // const handleOnMouseLeaveCard = () => isCardSelected ? setIsMouseEnter(false) : isMouseEnter
  // const handleMouseEnterCard = (isCardSelected) => isCardSelected ? isFirstMouseEnter ? setIsFirstMouseEnter(false) : setIsMouseEnter(true) : null
  // const handleOnMouseLeaveCard = (isCardSelected) => isCardSelected ? setIsMouseEnter(false) : isMouseEnter




  const cardTitle = !isCardSelected ? 'Сказочное заморское яство' : isMouseEnter ? 'Котэ не одобряет?' : 'Сказочное заморское яство'
  const titleStyle = !isCardSelected ? styles.title : isMouseEnter ? styles.titleHovered : styles.title
  const borderStyle = !isDisabled ? isCardSelected ? styles.borderSelected : styles.border : styles.borderDisabled
  const weightStyle = isCardSelected ? styles.weightSelected : styles.weight
  const descriptionStyle = !isDisabled ? styles.description : styles.disabledDescription

  return (
    <form className={styles.card} disabled={isDisabled}>
      <div className={borderStyle}>
        <main className={styles.main} onClick={handleToggleCardSelection} onMouseEnter={handleMouseEnterCard} onMouseLeave={handleOnMouseLeaveCard}>

          <div>
            <p className={titleStyle}> {cardTitle} </p>
            <h1 className={styles.brandname}>Нямушка</h1>
            <p className={styles.taste}> с {taste}</p>
            <AmountOfProducts amount={amount} mouseBonus={mouseBonus} note={note} />
          </div>

          <div className={weightStyle}>
            <div className={styles.top}>{String(weight).replace('.', ',')}</div>
            <p className={styles.bottom}>кг</p>
          </div>
        </main>
      </div>

      <div className={descriptionStyle} >
        {!isDisabled ? <ProductInitialDescription selected={selected} isDisabled={isDisabled} handleToggleCardSelection={handleToggleCardSelection} /> : disabledText}

      </div>


    </form >
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  taste: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  mouseBonus: PropTypes.number.isRequired,
  note: PropTypes.string,
  weight: PropTypes.number.isRequired,
  description: PropTypes.exact({
    initial: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    disabled: PropTypes.string.isRequired
  })
}

export default ProductCard