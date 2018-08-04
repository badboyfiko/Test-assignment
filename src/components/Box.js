import React from 'react'
import PropTypes from 'prop-types'
import styles from './Components.scss'

const Box = ({header, children}) => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <h1>{header}</h1>
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}

Box.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
}

export default Box
