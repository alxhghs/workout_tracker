/**
 * Component to render the modal for updating workouts
 */

import React, { Component } from 'react'
import '../styles/Modal.css'


class Modal extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  /* entriesID = value; databaseID = id */
  handleDelete(e) {
    // console.log(`modal id = ${e.target.id}`);
    // this.props.handleDelete(e, e.target.id);
    console.log(`modal id = ${e.target.value}`);
    this.props.handleDelete(e, e.target.id, e.target.value);
  }

  componentDidMount() {
    console.log(`Modal printing id: ` + this.props.databaseID)
    console.log(`Modal printing key: ` + this.props.entriesID)
  }

  render() {
    return (
      <div>
        <button
          type='button'
          className='btn btn-primary'
          data-toggle='modal'
          data-target='#exampleModal'
          name={this.props.name}
          onClick={this.props.handleClick}
        >{this.props.name}</button>

        {/*TODO map a modal for each button*/}


        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update workout</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.props.body}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  name="Close"
                >Close</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  name="Save changes"
                  data-dismiss="modal"
                  onClick={this.props.handleSubmit}
                >Save changes</button>
                <button
                  id={this.props.databaseID}
                  value={this.props.entriesID}
                  type='button'
                  className='btn btn-danger'
                  name='Delete'
                  data-dismiss='modal'
                  onClick={this.handleDelete}
                >Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
