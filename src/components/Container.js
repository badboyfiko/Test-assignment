import React from 'react'
import PropTypes from 'prop-types'
import {Grid} from 'react-bootstrap'
import styles from './Components.scss'

const Container = ({children, ...props}) => {
  return (
    <div className={styles.backgroundColor}>
      <Grid {...props}>
        {children}
      </Grid>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.bool,
}

export default Container
