import React from 'react'
import PropTypes from 'prop-types'
import styles from './Components.scss'

const Input = ({header, children, type, ...props}) => {
  const isSelect = children && children.length > 0
  const isNumber = type === 'number'
  const Arrow = () => <div className={styles.arrow} />
  const Eur = () => <div className={styles.eur}>EUR</div>
  return (
    <div className={styles.input}>
      <p>{header}</p>
      <div className={styles.fieldWrapper}>
        {isSelect
          ? <select required {...props}>
            {children}
          </select>
          : <input type={type} required {...props} />}
        {isSelect && <Arrow />}
        {isNumber && <Eur />}
      </div>
    </div>
  )
}

Input.propTypes = {
  header: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
}

export default Input
