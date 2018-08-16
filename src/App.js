import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class NavBar extends Component {
  render() {
    return (
      <nav className={"navbar navbar-dark bg-primary"}>
        <div className={"container d-flex justify-content-end"}>
          <form className={"form-inline my-2 my-lg-0"}>
            <Button
              className="btn btn-danger"
              value="Reset Table"
              id="reset"
              name="Reset"
            />
          </form>
        </div>
      </nav>
    )
  }
}

class Button extends Component {
  render() {
    return (
      <div>
        <button
          className={this.props.className}
          type={"submit"}
          value={this.props.value}
          id={this.props.id}>
          {this.props.name}
        </button>
      </div>
    )
  }
}

class Jumbotron extends Component {
  render() {
    return (
      <div className={"jumbotron"}>
        <div className={"container text-center"}>
          <h1>Simple Workouts Tracker</h1>
        </div>
      </div>
    )
  }
}

class Alert extends Component {
  render() {
    return (
      <div className={"container"}>
        <div role={"alert"}>
          <h3
            id={"update"}
            className={"alert alert-primary text-center"}
            >Welcome!
          </h3>
        </div>
      </div>
    )
  }
}

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

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron />
        <Alert />
        <AddEntry/>
      </div>
    )
  }
}

export default App;
