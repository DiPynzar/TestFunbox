import React from 'react'
import styles from './ProductCard.module.scss'

const ProductCardBorder = ({ isMouseEnter, isCardSelected, isDisabled }) => {
    const borderColor = isMouseEnter ?
        isCardSelected ? styles.borderColorSelectedHover : styles.borderColorHover
        :
        styles.borderColor
    return (
        <div className={styles.cardBorder}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="320" height="480">
                <defs>
                    <clipPath id="cp">
                        <polygon points="45,0 320,0 320,480 0,480 0,48" />
                    </clipPath>
                </defs>
                <g className={isDisabled ? styles.borderColor : borderColor}>
                    <rect x="2" y="2" rx="14" clipPath="url(#cp)" width="316" height="476" fill="#f2f2f2" />
                    <line x1="2" y1="48" x2="45" y2="2" />
                </g>
            </svg>
        </div >
    )
}
export default ProductCardBorder