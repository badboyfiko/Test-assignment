import React from 'react'
import PropTypes from 'prop-types'
import {ADD_COMPANY, getCompanies} from '../Page.queries'
import {Mutation} from 'react-apollo'
import styles from './Components.scss'
import {Modal} from 'react-bootstrap'
import Input from './Input'
import SmallContainer from './SmallContainer'

const ModalComponent = ({show, handleClose}) => {
  let name
  let stage
  let sector
  let investmentSize
  return (
    <Modal bsSize="large" show={show} onHide={handleClose} className={styles.modal}>
      <SmallContainer>
        <h5>add new company</h5>
        <Mutation
          mutation={ADD_COMPANY}
          update={(cache, {data: {addCompany}}) => {
            const {company} = cache.readQuery({query: getCompanies})
            cache.writeQuery({
              query: getCompanies,
              data: {company: company.concat([addCompany])},
            })
          }}
        >
          {(addCompany, {data}) => (
            <form
              onSubmit={e => {
                e.preventDefault()
                addCompany({variables: {
                  name: name.value,
                  stage: stage.value,
                  sector: sector.value,
                  investmentSize: investmentSize.value,
                }})
                handleClose()
              }}
            >
              <Input
                passRef={node => { name = node }}
                name="name"
                header="Company name"
                placeholder="Company name"
              />
              <Input
                passRef={node => { stage = node }}
                name="stage"
                header="Stage"
              >
                <option value="" disabled selected hidden>Select stage from the list</option>
                <option value="Idea">Idea</option>
                <option value="Prototype">Prototype</option>
                <option value="Seed">Seed</option>
                <option value="Series A">Series A</option>
                <option value="Series B">Series B</option>
                <option value="Series C">Series C</option>
              </Input>
              <Input
                passRef={node => { sector = node }}
                name="sector"
                header="Sector"
              >
                <option value="" disabled selected hidden>Select sector from the list</option>
                <option value="Fintech">Fintech</option>
                <option value="Insuretech">Insuretech</option>
                <option value="Roboadvisory">Roboadvisory</option>
                <option value="IOT">IOT</option>
              </Input>
              <Input
                passRef={node => { investmentSize = node }}
                name="investmentSize"
                header="Investment size"
                placeholder="Enter Amount"
                max={999999999}
                type="number"
              />
              <div className={styles.buttonWrapper}>
                <button className="button" type="submit">
                    Add new company
                </button>
              </div>
            </form>
          )}
        </Mutation>
      </SmallContainer>
    </Modal>
  )
}

ModalComponent.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default ModalComponent
