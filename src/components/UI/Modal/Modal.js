import classes from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return (
    <div className={classes.backdrop}></div>
  )
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className='modal-content'>
        {props.children}
      </div>
    </div>
  )
}

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlay'))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay'))}
    </>
  )
}

export default Modal