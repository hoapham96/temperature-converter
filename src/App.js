import './App.css';
import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input : "",
      result: ""
    };
    // this.handleClick=this.handleClick.bind(this);
  }

  myChangeHandler = (event) => {
    // event.preventDefault()
    this.setState({ input: event.target.value });
  };

  convertFromCtoF= (e)=>{
    e.preventDefault()
    
    this.setState({ result: this.state.input * (9 / 5) + 32 })

  }

  convertFromFtoC=(e) => {
    e.preventDefault()

    const value = this.state.input - 32 * 5 / 9
    this.setState({result: value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <h1>Temperature Converter </h1>
        <p>Enter the temperature:</p>
        <input
          type="text"
          onChange={this.myChangeHandler}
        />

        <button onClick={this.convertFromCtoF}>Convert from C to F</button>
        <button onClick={this.convertFromFtoC}>Convert from F to C</button>
        <p>Celsius to Fahrenheit</p> 
        <p>{this.state.result}</p>
      </form>
    );
  }
}

export default App;
