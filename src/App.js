import React from 'react'
import styles from './scss/index.module.scss'
import ProductCard from './components/ProductCard'
import catsData from './catsData'

const App = () => (
  <div className={styles.wrapper}>
    <p className={styles.text}>Ты сегодня покормил кота?</p>
    <div className={styles.row}>
      {
        catsData.map(item => <ProductCard key={item.id} {...item} />)
      }
    </div>
  </div>)

export default App