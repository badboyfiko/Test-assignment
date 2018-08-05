import React from 'react'
import PropTypes from 'prop-types'
import pageQueries from './Page.queries'
import {Container, Box, Sectors} from './components'

export const Page = ({company, loading}) => {
  if (loading) {
    return <span>Loading data...</span>
  }

  return (
    <Container>
      <Box header="companies by sectors">
        <Sectors
          data={[
            {
              count: 2,
              name: 'fintech',
              id: 'fintech'
            },
            {
              count: 3,
              name: 'insurtech',
              id: 'insurtech'
            },
            {
              count: 2,
              name: 'roboadvisory',
              id: 'roboadvisory'
            },
            {
              count: 1,
              name: 'iot',
              id: 'iot'
            },
          ]}
        />
      </Box>
      <Box header="company name">
        <table>
          <tr>
            <th>COMPANY NAME</th>
            <th>STAGE</th>
            <th>SECTOR</th>
            <th>INVESTMENT SIZE</th>
          </tr>
          {
            company.map((company, i) =>
              <tr key={i}>
                <td>{company.name}</td>
                <td>{company.stage}</td>
                <td>{company.sector}</td>
                <td>{company.investmentSize}</td>
              </tr>
            )
          }
        </table>
      </Box>
    </Container>
  )
}

Page.propTypes = {
  loading: PropTypes.bool,
  company: PropTypes.array
}

export default pageQueries(Page)
