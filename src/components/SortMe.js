import React, { Component } from 'react';
import mockData from '../data/MOCK_DATA_2.json'


class SortMe extends Component {
    state = {
        mockDataState: mockData
    }
    handleSort = () => {
        let tempData = this.state.mockDataState.sort(function (a, b) {
            if (a.first_name < b.first_name) { return -1; }
            if (a.first_name > b.first_name) { return 1; }
            return 0;
        })
        this.setState({ mockDataState: tempData });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleSort}>A-Z</button>
                {this.state.mockDataState.map(user => <div>{user.first_name}</div>)}
            </div>
        );
    }
}

export default SortMe;