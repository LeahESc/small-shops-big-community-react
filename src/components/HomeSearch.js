import React, { Component } from 'react'

export default class HomeSearch extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type ="text" name="category" onChange={this.handleChange} value={this.state.category} />
                    <button type="submit">Seach</button> 
                </form>
            </div>
        )
    }
}
