import React, { Component } from 'react'

export default class UpVote extends Component {
    state = {
        votes: 0
    }

    handleClick = (e) => {
        this.setState({
            votes: this.state.votes + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.votes}</button>
            </div>
        )
    }
}
