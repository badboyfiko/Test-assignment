import React, {Component} from 'react'
import styles from './Components.scss'
import Divider from './Divider.js'
import ModalComponent from './ModalComponent.js'

class ModalButton extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false
    }
  }

  handleClose () {
    this.setState({show: false})
  }

  handleShow () {
    this.setState({show: true})
  }
  render () {
    return (
      <div>
        <Divider />
        <div className={styles.buttonWrapper}>
          <button onClick={this.handleShow}>
           Add new company
          </button>
        </div>
        <ModalComponent show={this.state.show} handleClose={this.handleClose} />
      </div>
    )
  }
}

export default ModalButton
