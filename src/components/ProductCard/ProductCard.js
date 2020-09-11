import React, { useState } from 'react'
import styles from './ProductCard.module.scss'
import PropTypes from 'prop-types'
import AmountOfProducts from '../AmountOfProducts'
import ProductInitialDescription from '../ProductInitialDescription/ProductInitialDescription'


const ProductCard = props => {
  const { taste, weight, description, amount, mouseBonus, note, isDisabled } = props;

  const [isCardSelected, setIsCardSelected] = useState(false)
  const [isMouseEnter, setIsMouseEnter] = useState(false)
  const [isMouseLeave, setIsMouseLeave] = useState(true)

  const handleToggleCardSelection = () => {
    !isDisabled ? setIsCardSelected(!isCardSelected) : setIsCardSelected(false)
    setIsMouseLeave(!isMouseLeave)
    setIsMouseEnter(false)
  }

  const handleMouseEnterCard = () => {
    if (isCardSelected && isMouseLeave) {
      setIsMouseEnter(!isMouseLeave)
    } else {
      setIsMouseEnter(!isMouseEnter)
    }
  }

  const handleOnMouseLeaveCard = () => {
    if (isCardSelected && isMouseLeave) {
      setIsMouseEnter(true)
    } else {
      setIsMouseEnter(false)
    }
  }

  const cardTitle = !isCardSelected ? 'Сказочное заморское яство' : isMouseEnter ? 'Котэ не одобряет?' : 'Сказочное заморское яство'
  const titleStyle = !isCardSelected ? styles.title : isMouseEnter ? styles.titleHovered : styles.title
  const borderStyle = !isDisabled ? isCardSelected ? styles.borderSelected : styles.border : styles.borderDisabled
  const weightStyle = isCardSelected ? styles.weightSelected : styles.weight
  const descriptionStyle = !isDisabled ? styles.description : styles.disabledDescription

  return (
    <div className={styles.card}>
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
      {!isDisabled ?
        isCardSelected ?
          <p className={descriptionStyle}>{description}</p>
          :
          <ProductInitialDescription
            isDisabled={isDisabled}
            handleToggleCardSelection={handleToggleCardSelection}
          />
        :
        <p className={descriptionStyle}>Печалька с {taste} закончился.</p>
      }
    </div >
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  taste: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  mouseBonus: PropTypes.number.isRequired,
  note: PropTypes.string,
  weight: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

export default ProductCard