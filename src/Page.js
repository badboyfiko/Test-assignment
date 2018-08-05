import React from 'react'
import PropTypes from 'prop-types'
import pageQueries from './Page.queries'
import {Container, Box, Sectors, Chart, Table, ModalButton} from './components'

export const Page = ({company, loading}) => {
  if (loading) {
    return <span>Loading data...</span>
  }
  const sectorCount = (sector) => {
    let count = 0
    company.map(company => {
      if (company.sector === sector) count++
    })
    return count
  }
  return (
    <Container>
      <Box header="companies by sectors">
        <Sectors
          data={[
            {
              count: sectorCount('Fintech'),
              name: 'fintech',
              id: 'fintech'
            },
            {
              count: sectorCount('Insurtech'),
              name: 'insurtech',
              id: 'insurtech'
            },
            {
              count: sectorCount('Roboadvisory'),
              name: 'roboadvisory',
              id: 'roboadvisory'
            },
            {
              count: sectorCount('IOT'),
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
        <ModalButton />
      </Box>
    </Container>
  )
}

Page.propTypes = {
  loading: PropTypes.bool,
  company: PropTypes.array
}

export default pageQueries(Page)
