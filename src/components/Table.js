import React from 'react'
import PropTypes from 'prop-types'
import styles from './Components.scss'
import Divider from './Divider.js'

const Table = ({data}) => {
  return (
    <div className={styles.table}>
      <div className={styles.flexCol}>
        <div className={styles.tableHeader}>
          <div className={styles.tableItemStart}>
            <h3>company name</h3>
          </div>
          <div className={styles.tableItemEnd}>
            <h3>stage</h3>
          </div>
          <div className={styles.tableItemEnd}>
            <h3>sector</h3>
          </div>
          <div className={styles.tableItemEnd}>
            <h3>investment size</h3>
          </div>
        </div>
        <Divider />
        {data.map((company, i) => (
          <div className={styles.rowWrapper}>
            <div className={styles.flexRow}>
              <div className={styles.tableItemStart}>
                <p>{company.name}</p>
              </div>
              <div className={styles.tableItemEnd}>
                <p>{company.stage}</p>
              </div>
              <div className={styles.tableItemEnd}>
                <p>{company.sector}</p>
              </div>
              <div className={styles.tableItemEnd}>
                <p>{company.investmentSize}</p>
              </div>
            </div>
            {i !== data.length - 1 && <Divider />}
          </div>
        ))}
      </div>
      <Divider />
    </div>
  )
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Table
