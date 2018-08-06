import gql from 'graphql-tag'

export const getCompanies = gql`
  query getCompanies {
    company {
      name
      stage
      sector
      investmentSize
    }
  }`

export const ADD_COMPANY = gql`
  mutation ($name: String!, $stage: String!, $sector: String!, $investmentSize: Int!) {
    addCompany(name: $name, stage: $stage, sector: $sector, investmentSize: $investmentSize) {
      name
      stage
      sector
      investmentSize
    }
  }`
