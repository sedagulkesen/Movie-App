import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Film from "./components/Film";

class App extends Component {
  constructor() {
    super();
    this.state = { userName: "Sedos", loggedIn: true, films: [] };
  }

  async componentDidMount() {
    const films = await fetch("https://ghibliapi.herokuapp.com/films").then(r =>
      r.json()
    );

    this.setState({ films });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.state.userName} APP</h1>
        </header>
        <header userName={this.state.userName} logout={this.logout} />

        <div style={{ display: "block" }}>
          {this.state.films.map(film => (
            <Film film={film} />
          ))}
        </div>
      </div>
    );
  }

  logout = event => {
    this.setState({ userName: null, loggedIn: false });
  };
}

export default App;
