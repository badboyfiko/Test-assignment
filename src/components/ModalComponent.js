import React from 'react'
import PropTypes from 'prop-types'
import styles from './Components.scss'
import {Modal} from 'react-bootstrap'
import Input from './Input'
import SmallContainer from './SmallContainer'

const ModalComponent = ({show, handleClose}) => {
  return (
    <Modal bsSize="large" show={show} onHide={handleClose} className={styles.modal}>
      <SmallContainer>
        <h5>add new company</h5>
        <form>
          <Input name="name" header="Company name" placeholder="Company name" />
          <Input name="stage" header="Stage">
            <option value="" disabled selected hidden>Select stage from the list</option>
            <option value="Idea">Idea</option>
            <option value="Seed">Seed</option>
            <option value="Prototype">Prototype</option>
            <option value="SeriesA">Series A</option>
            <option value="SeriesB">Series B</option>
            <option value="SeriesC">Series C</option>
          </Input>
          <Input name="sector" header="Sector">
            <option value="" disabled selected hidden>Select sector from the list</option>
            <option value="Fintech">Fintech</option>
            <option value="Insurtech">Insurtech</option>
            <option value="Roboadvisory">Roboadvisory</option>
            <option value="IOT">IOT</option>
          </Input>
          <Input name="investmentSize" header="Investment size" placeholder="Enter Amount" type="number" />
          <div className={styles.buttonWrapper}>
            <button className="button" type="submit">
              Add new company
            </button>
          </div>
        </form>
      </SmallContainer>
    </Modal>
  )
}

ModalComponent.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default ModalComponent
