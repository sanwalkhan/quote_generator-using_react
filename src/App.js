import axios from "axios";
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    advice : ''
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        // const { advice } = response.data.slip;

        // this.setState({ advice });
        console.log(response.data.slip.advice)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <div className="App">App</div>;
  }
}
