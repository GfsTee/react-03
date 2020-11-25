import React, { Component } from 'react';

class ToggleBox extends Component {
    state = {
        isVisible: false
    }
    handleIsVisible = () => {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={this.handleIsVisible}>+</button>
                <div style={{ display: this.state.isVisible ? "block" : "none" }}>Lorem ipsum dolor sit amet.</div>
                <div style={{ color: "red" }}></div>
                <div className={this.state.isVisible ? "show-me" : "hide-me"}>Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Vel, reprehenderit!</div>
            </div>
        );
    }
}

export default ToggleBox;