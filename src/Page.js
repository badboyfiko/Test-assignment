import React from 'react'
import PropTypes from 'prop-types'
import pageQueries from './Page.queries'
import {Container, Box, Sectors, Chart, Table, Button} from './components'

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
      <Box header="companies by investment size">
        <Chart data={company} />
      </Box>
      <Box style={{marginBottom: 40}}>
        <Table data={company} />
        <Button />
      </Box>
    </Container>
  )
}

Page.propTypes = {
  loading: PropTypes.bool,
  company: PropTypes.array
}

export default pageQueries(Page)
