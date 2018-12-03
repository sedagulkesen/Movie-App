import React, { Component } from "react";

class Film extends Component {
  render() {
    const { title, description, director} = this.props.film;
    return (
      <div style={divStyle}>
        <h3>{title}</h3>
        <p> <b>Director : </b>{director}</p>
        <p>{description}</p>

      </div>
    );
  }
}

export default Film;

const divStyle = {
  background: "#eef",
  margin: "50px",
  padding: "30px"
};
