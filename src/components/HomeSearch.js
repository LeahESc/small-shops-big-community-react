import React, { Component } from 'react'

export default class HomeSearch extends Component {
    state = {
        category: '',
        tags: [
            {id: 1, value:"BIPOC-OWNED", checked: false},
            {id: 2, value:"WOMEN/WOMXN-OWNED", checked: false},
            {id: 3, value:"LGBTQ+=OWNED", checked: false},
            {id: 4, value:"COMMITMENT TO SOCIAL IMPACT", checked: false}
        ]
    }

    handleChange = () => {

    }

    handleSubmit = () =>{

    }

    handleValueChange = () => {

    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                  
                        <input type ="text" name="category" onChange={this.handleChange} value={this.state.category} placeholder="plant shops..."/>
                        <button type="submit" >Search</button> 

                        <div className="checkbox">
                            <label>
                                <input
                                type="checkbox"
                                value={"BIPOC-OWNED"}
                                checked={this.state.selectedOption === "BIPOC-OWNED"}
                                onChange={this.onValueChange}
                                /> BIPOC-OWNED
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input
                                type="checkbox"
                                value="WOMEN/WOMXN-OWNED"
                                checked={this.state.selectedOption === "WOMEN/WOMXN-OWNED"}
                                onChange={this.handleValueChange}
                                /> WOMEN/WOMXN-OWNED
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input
                                type="checkbox"
                                value="LGBTQ+-OWNED"
                                checked={this.state.selectedOption === "LGBTQ+-OWNED"}
                                onChange={this.handleValueChange}
                                /> LGBTQ+-OWNED
                            </label>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input
                                type="checkbox"
                                value="COMMITMENT TO SOCIAL IMPACT"
                                checked={this.state.selectedOption === "COMMITMENT TO SOCIAL IMPACT"}
                                onChange={this.handleValueChange}
                                /> COMMITMENT TO SOCIAL IMPACT
                            </label>
                        </div>
                    
                   
                </form>
            </div>
        )
    }
}
