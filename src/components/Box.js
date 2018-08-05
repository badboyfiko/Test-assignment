import React from 'react'
import PropTypes from 'prop-types'
import styles from './Components.scss'

const Box = ({header, children, style}) => {
  return (
    <div className={styles.box} style={style}>
      {header &&
        <div className={styles.header}>
          <h3>{header}</h3>
        </div>}
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}

Box.propTypes = {
  header: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.array]),
  style: PropTypes.object,
}

export default Box
