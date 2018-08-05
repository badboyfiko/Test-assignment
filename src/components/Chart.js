import React from 'react'
import PropTypes from 'prop-types'
import styles from './Components.scss'
import PieChart from 'react-minimal-pie-chart'
import {Grid, Row, Col} from 'react-bootstrap'

const colors = [
  '#3993bb',
  '#8bc34a',
  '#a767dd',
  '#23649e',
  '#ffc700',
  '#f000ff',
  '#ed3445',
  '#00a651'
]

const Chart = ({data}) => {
  const chartData = data.map((company, i) => (
    {
      value: company.investmentSize,
      color: colors[i],
    }
  ))
  return (
    <div className={styles.chart}>
      <Row bsClass={`row ${styles.row}`}>
        <Col xs={12} sm={6}>
          <div className={styles.flexCol}>
            <div className={styles.chartWrapper}>
              <PieChart
                data={chartData}
                animate
                lineWidth={35}
                style={{height: 260, width: 260}}
              />
              <div className={styles.companiesCount}>
                <h2>{data.length}</h2>
                <h4>companies</h4>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div className={styles.flexRow}>
            {
              data.map((company, i) => (
                <div className={styles.legendItem}>
                  <div style={{backgroundColor: colors[i]}} className={styles.legendPoint} />
                  <p>{company.name}</p>
                </div>
              ))
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.array,
}

export default Chart
