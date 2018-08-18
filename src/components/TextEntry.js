/**
 * Component for rendering the entry field including text and radio
 */

import React, {Component} from 'react'
import Button from "./Button";


class TextEntry extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <input
          className="form-control workout-fields"
          type="text"
          name={this.props.name}
          id={this.props.name}
          value={this.props.value}
          autoComplete="off"
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

class RadioEntry extends Component {
  render() {
    return (
      <div className="form-check m-4">
        <input
          className="form-check-input"
          type="radio"
          name={this.props.name}
          id={this.props.name}
          value={this.props.value}
          autoComplete="off"
        />
        <label
          className="form-check-label"
          htmlFor={this.props.name}
        >{this.props.name.charAt(0).toUpperCase() + this.props.name.substr(1)}
        </label>
      </div>
    )
  }
}

class AddEntry extends Component {
  render() {
    return (
      <div className="container">
        <h2>Add Entry</h2>
        <form>
          <div className="row">
            <TextEntry
              name="name"
              value=""
              placeholder="Workout" />
            <TextEntry
              name="date"
              value=""
              placeholder="Date" />
            <TextEntry
              name="reps"
              value=""
              placeholder="Reps" />
            <TextEntry
              name="weight"
              value=""
              placeholder="Weight" />
            <RadioEntry
              name="lbs"
              value="1"
              checked="true"
            />
            <RadioEntry
              name="kg"
              value="0"
              checked="false"
            />
          </div>
          <div className="row">
            <div className="col">
              <Button
                className="btn btn-success"
                type="submit"
                id="submit-workout"
                name="Submit">
              </Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddEntry
