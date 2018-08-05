import React from 'react'
import PropTypes from 'prop-types'
import styles from './Components.scss'

const Sectors = ({data}) => {
  return (
    <div className={styles.sectorsRow}>
      {data.map(sector => (
        <div className={styles.sectorWrapper}>
          <div className={styles.sector}>
            <h1>{sector.count}</h1>
            <h3>{sector.name}</h3>
            <img
              className={styles.image}
              src={`../../Assets/Assets/Icons/ico_${sector.id}.svg`}
              alt={sector.id}
            />
          </div>
          <div className={styles.verticalDivider} />
        </div>
      ))}
    </div>
  )
}

Sectors.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Sectors
