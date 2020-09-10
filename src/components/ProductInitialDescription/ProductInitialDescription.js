import React from 'react'
import styles from './ProductInitialDescription.module.scss'

const ProductInitialDescription = props => {


    return (
        <div className={styles.description}>
            Чего сидишь? Порадуй котэ, <a href='#' className={styles.initialDescription} onClick={props.handleToggleCardSelection}>купи.</a>
        </div>
    )
}

export default ProductInitialDescription

