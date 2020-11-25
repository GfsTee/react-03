import React, { Component } from 'react';

class ComponentWithState extends Component {
    state = {
        name: "Superman",
        count: 0,
        isBlack: true,
        input1: "",
        input2: ""
    }
    handleIncrement = () => {
        // this.state.count++ 
        this.setState({ count: this.state.count + 1 }, () => console.log(this.state.count));
        // console.log(this.state.count);
    }
    handleReset = () => {
        this.setState({ count: 0 });
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    handleInput = (event) => {
        // console.log(event)
        // this.setState({ input: event.target.value });
        console.log(event.target.name)
        // if (event.target.name === "input1") {
        //     this.setState({ input1: event.target.value });
        // } else if (event.target.name === "input2") {
        //     this.setState({ input2: event.target.value });
        // }
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <p>{this.state.name}</p>
                <p>{this.state.count}</p>
                <button onClick={() => this.handleIncrement()}>+</button>
                {/* <button onClick={this.handleIncrement}>+</button> */}
                <button onClick={this.handleDecrement}>-</button>
                <div>
                    <input type="text" name="input1" value={this.state.input1} onChange={this.handleInput} />
                    <input type="text" name="input2" value={this.state.input2} onChange={this.handleInput} />
                </div>
                <h3>Input 1: {this.state.input1}</h3>
                <h3>Input 2: {this.state.input2}</h3>
            </div>
        );
    }
}

export default ComponentWithState;
