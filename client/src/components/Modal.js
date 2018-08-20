/**
 * Component to render the modal for updating workouts
 */

import React from 'react'
import Button from './Button'
import '../styles/Modal.css'


const Modal = (props) => {
  return (
    <div>
      <Button
        type='button'
        className='btn btn-primary'
        dataToggle='modal'
        dataTarget='#exampleModal'
        name={props.name}
        handleClick={props.handleClick}
      />
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Workout</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div className="modal-body">
              {props.body}
            </div>
            <div className="modal-footer">
              <Button
                type="button"
                className="btn btn-secondary"
                dataDismiss="modal"
                name="Close">
              </Button>
              <Button
                type="button"
                className="btn btn-primary"
                name="Save changes">
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal
