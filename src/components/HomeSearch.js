import React, { Component } from 'react'
import TagCheckbox from './TagCheckbox'

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

    handleChange = (e) => {

    }

    handleSubmit = (e) =>{

    }

    handleCheck = (e) => {
        const { name } = e.target;
        console.log("finding the tag", e, this.state )
        this.setState({
            
            ...this.state,
            tags: [
            ...this.state.tags.map(tag => {
                if (tag.value === "name") {
                    return {checked: true}
                }
            // this is not quite right, how do i access the checkbox to change it's checked value????
            })]
        })
    };
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                  
                        <input type ="text" name="category" onChange={this.handleChange} value={this.state.category} placeholder="plant shops..."/>
                        <button type="submit" >Search</button> 
                        {this.state.tags.map(tag => <TagCheckbox key={tag.id} value={tag.value} checked={tag.checked} onChange={this.handleCheck} /> )}
                        {/* <div className="checkbox">
                            <label>
                                <input
                                type="checkbox"
                                value={"BIPOC-OWNED"}
                                checked={this.state.selectedOption === "BIPOC-OWNED"}
                                onChange={this.onValueChange}
                                /> BIPOC-OWNED
                            </label> */}
                        {/* </div>
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
                        </div> */}
                    
                   
                </form>
            </div>
        )
    }
}
