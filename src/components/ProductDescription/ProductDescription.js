import React from 'react'
import styles from './ProductDescription.module.scss'



const ProductDescription = props => {
    const { isDisabled, taste, description, isCardSelected, handleToggleCardSelection } = props;

    const ProductInitialDescription = () => {
        return (
            <p>
                Чего сидишь? Порадуй котэ, <button type='button' className={styles.initialDescription} onClick={handleToggleCardSelection}>купи.</button>
            </p>
        )
    }

    const ProductDisabledDescription = () => <p> Печалька с {taste} закончился.</p>

    const ProductSelectedDescription = () => <p>{description}</p>


    const descriptionStyle = isDisabled ? styles.disabledDescription : styles.description

    return (
        <div className={descriptionStyle}>

            {
                (() => {

                    if (isDisabled) {
                        return <ProductDisabledDescription {...props} />
                    } else if (isCardSelected) {
                        return <ProductSelectedDescription {...props} />
                    } else {
                        return <ProductInitialDescription {...props} />
                    }
                })()
            }

        </div>
    )

}

export default ProductDescription

