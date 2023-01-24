import axios from "axios";
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {

  // state = {
  //   quote : ' '
  // };

  // componentDidMount(){
  //   this.fetchQuote()
  // }

  // fetchQuote = () =>{
  //   axios.get("https://api.adviceslip.com/advice")
  //   .then((response) =>{
  //    const { quote } = response.data.slip;
  //         this.setState({ quote });
  //        console.log(response.data.slip.advice)
  //        this.setState({ quote });
  //   })
  //   .catch((error) =>{
  //     alert(error)
  //   } )
  // }


  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        // const { advice } = response.data.slip;

        // this.setState({ advice });
        const { advice } = response.data.slip;
        // console.log(response.data.slip.advice)

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // const {quote} = this.state
    return (

      // <div className="app">
      // <div className="card">
      // <h1 className="heading">{quote}</h1>
      // <button className="button" onClick={this.fetchQuote}>
      //       <span>Generate a Quote</span>
      //     </button>
      // </div>
      // </div>
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Generate a Quote</span>
          </button>
        </div>
      </div>
    );
  }
}
