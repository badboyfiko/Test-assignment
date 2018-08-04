import React from 'react'
import PropTypes from 'prop-types'
import {Grid} from 'react-bootstrap'
import styles from './Components.scss'

const Container = ({children, ...props}) => {
  return (
    <Grid {...props} className={styles.mainContainer}>
      {children}
    </Grid>
  )
}

Container.propTypes = {
  children: PropTypes.array,
}

export default Container
