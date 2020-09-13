import React from 'react'
import styles from './AmountOfProducts.module.scss'
import PropTypes from 'prop-types'

const AmountOfProducts = props => {
    const { amount, mouseBonus, note } = props;

    const declOfNum = (number, titles) => {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    return (
        <div>
            <p className={styles.amount}>{amount}
                <span> {declOfNum(amount, ['порция', 'порции', 'порций'])}</span>
            </p>
            <p className={styles.amount}>
                {mouseBonus >= 2 ? (mouseBonus) : null}
                <span>
                    {mouseBonus !== 0 ? declOfNum(mouseBonus, ['мышь', ' мыши', ' мышей']) + ' в подарок' : ''}
                </span>
            </p>
            <p className={styles.amount}><span>{note}</span></p>
        </div>
    )
}

AmountOfProducts.propTypes = {
    amount: PropTypes.number.isRequired,
    mouseBonus: PropTypes.number.isRequired,
    note: PropTypes.string
}

export default AmountOfProducts
