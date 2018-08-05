import React from 'react'
import styles from './Components.scss'
import Divider from './Divider.js'

const ModalButton = (props) => {
  return (
    <divider>
      <Divider />
      <div className={styles.buttonWrapper}>
        <button {...props}>
          Add new company
        </button>
      </div>
    </divider>
  )
}

export default ModalButton
