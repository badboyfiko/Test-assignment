import React from 'react'
import styles from './Components.scss'

const Button = (props) => {
  return (
    <div className={styles.buttonWrapper}>
      <button {...props}>
        Add new company
      </button>
    </div>
  )
}

export default Button
