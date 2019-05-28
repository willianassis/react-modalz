import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { modalzOpen, modalzClose, modalzUpdate } from './modalz.actions'

function Demo(props) {
  useEffect(() => {
    props.modalzUpdate({
      title: 'modal title here.'
    })
  }, [])
  
	return (
		<div>
      <button onClick={() => props.modalzOpen(ModalContent) }>
				Open Modal from any component, passing another component to the modalz body.
			</button>
    </div>
	)
}

function ModalContent(props) {
  return(
    <div>Your Component goes here!</div>
  )
}

// Your normal redux connect but binding modalz state to props.
const mapState = state => ({ modalz: state.modalz })
// Your normal redux connect but binding action creators with modalz methods.
const mapDispatch = dispatch => bindActionCreators({ modalzOpen, modalzClose, modalzUpdate }, dispatch)

export default connect(
  mapState,
  mapDispatch
)(Demo)