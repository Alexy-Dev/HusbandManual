import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <React.Fragment>
      <button onClick={() => this.setState({ isOpen: true })}>
      Информация
      </button>

      {this.state.isOpen && (
        <div className='mod'>
      <div className='mod-body'>
      <h1>Список готов!</h1>
      <p>Ознакомьтесь с правилами!</p>
      <button onClick={() => this.setState({ isOpen: false})}>
      Принимаю
      </button>
      </div>
      </div>
    )}
      </React.Fragment>
    )
  }
}
