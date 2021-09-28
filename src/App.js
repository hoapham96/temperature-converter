import './App.css';
import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input : "",
      result: "",
      isCtoF: true

    };
    // this.handleClick=this.handleClick.bind(this);
  }

  myChangeHandler = (event) => {
    // event.preventDefault()
    this.setState({ input: event.target.value });
  };

  handleSubmit = (e) =>{
    let isCtoF=this.state.isCtoF;
    e.preventDefault()
    let input = this.state.input;

    if (!Number(input)){
      alert("Your input must be a number");
      return;
    }

    if(isCtoF) {
      this.convertFromCtoF()
    } else {
      this.convertFromFtoC()
    }
  }

  convertFromCtoF= ()=>{
    this.setState({ result: this.state.input * (9 / 5) + 32 })
  }

  convertFromFtoC=() => {
    const value = (this.state.input - 32) * 5 / 9
    this.setState({result: value })
  }

  render() {
    let button;
    let isCtoF=this.state.isCtoF;


    if (isCtoF) {
      button = <button className="btn-temp" onClick={()=>this.setState({isCtoF: !isCtoF})}>Convert from C to F</button>
    } else {
      button = <button className="btn-temp" onClick={()=>this.setState({isCtoF: !isCtoF})}>Convert from F to C</button>
    }
 

    return (
      <form onSubmit={(e)=>this.handleSubmit(e)} >
        <h1>Temperature Converter </h1>
        <div>Enter the temperature:</div>
        <input
          type="text"
          onChange={this.myChangeHandler}

        />
       {button}

        <div>Celsius to Fahrenheit</div> 
        <div>{this.state.result}</div>
      </form>
    );
  }
}

export default App;
