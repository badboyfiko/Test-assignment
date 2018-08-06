import React from 'react'
import PropTypes from 'prop-types'
import styles from './Components.scss'

const ModalComponent = ({children}) => {
  return (
    <div className={styles.smallContainer}>
      {children}
    </div>
  )
}

ModalComponent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default ModalComponent
