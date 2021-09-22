import './App.css';
import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input:""};
  }

  myChangeHandler = (event) => {
    event.preventDefault()
    this.setState({ input: event.target.value * (9 / 5) + 32 });
  };

  handleSubmit = (e) =>{ 
    e.preventDefault();
    this.setState({username: this.state.input})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Temperature Converter </h1>
        <p>Enter the temperator:</p>
        <input
          type="text"
          onChange={this.myChangeHandler}
        />
        <button>submit</button>
        <p>Celsius to Fahrenheit</p>
        <p>{this.state.username}</p>
      </form>
    );
  }
}

export default App;
