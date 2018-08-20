import React from "react";
import Button from "../Button";
import RadioEntry from './RadioEntry'
import TextEntry from './TextEntry'

const AddEntry = () => {
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

export default AddEntry
