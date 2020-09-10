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

  const handleToggleCardSelection = () => {
    setIsCardSelected(!isCardSelected)
    isCardSelected ? setIsFirstMouseEnter(true) : setIsFirstMouseEnter(false)
  }

  const borderStyle = isCardSelected ? styles.borderSelected : styles.border
  const weightStyle = isCardSelected ? styles.weightSelected : styles.weight

  const handleMouseEnterCard = (isCardSelected) => isCardSelected ? isFirstMouseEnter ? setIsFirstMouseEnter(false) : setIsMouseEnter(true) : null
  const handleOnMouseLeaveCard = (isCardSelected) => isCardSelected ? setIsMouseEnter(false) : null

  const cardTitle = !isCardSelected ? 'Сказочное заморское яство' : isMouseEnter ? 'Котэ не одобряет?' : 'Сказочное заморское яство'
  const titleStyle = !isCardSelected ? styles.title : isMouseEnter ? styles.titleHovered : styles.title

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

      <div className={styles.description}>
        {isCardSelected ? selected : <ProductInitialDescription selected={selected} isDisabled={isDisabled} handleToggleCardSelection={handleToggleCardSelection} />}

      </div>


    </form>
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