import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modalzOpen, modalzClose } from './modalz.actions';
import './modalz.css';

const Modalz = props => {
  const { modalzOpen, modalzClose, modalz } = props;

  return (
    <>
      <div className={classnames('modalz', {
        'open': modalz.isOpen
      })}>
        <div className="modalz-wrapper">
          <div className="modalz-header">
            <h1>{modalz.title}</h1>
            <button className="modalz-btn-close" onClick={modalzClose}>&#8722;</button>
          </div>
          <div className="modalz-body">
            {modalz.content && modalz.content()}
          </div>
          <div className="modalz-footer">
            <button 
              className={`modalz-btn ${modalz.btnCancelClass}`}
              onClick={modalz.onCancel || modalzClose}>{modalz.btnCancelText}</button>
            <button 
              className={`modalz-btn ${modalz.btnConfirmClass}`}
              onClick={modalz.onConfirm || modalzClose}>{modalz.btnConfirmText}</button>
          </div>
        </div>
      </div>
      <div className="modalz-backdrop"></div>
    </>
  )
}

const mapState = state => ({ modalz: state.modalz });
const mapDispatch = dispatch => bindActionCreators({ modalzOpen, modalzClose }, dispatch);

export default connect(
  mapState,
  mapDispatch
)(Modalz);
