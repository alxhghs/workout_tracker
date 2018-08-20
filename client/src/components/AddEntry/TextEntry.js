import React from "react";

const TextEntry = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <input
        className="form-control workout-fields"
        type="text"
        name={props.name}
        id={props.name}
        value={props.value}
        autoComplete="off"
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default TextEntry
