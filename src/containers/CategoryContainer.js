import React, { Component } from 'react'
import Shops from '../components/Shops'
import { connect } from 'react-redux'
import MapContainer from './MapContainer'
import { Grid } from 'semantic-ui-react'
import ShopForm from '../components/ShopForm'
import {Link } from 'react-router-dom'

class CategoryContainer extends Component {
    render() {   
        
        const categoryId = parseInt(this.props.match.params.id)
        const category = this.props.categories.find(c => c.id === categoryId)
        let queryTerms = this.props.location.search.substring(3).split('&')
    
        const tags = queryTerms.map(term => term.replace(/_/g, " "))
        const shops = category.shops.filter(s => s.tags.some(t => t.name === tags[0] || t.name === tags[1] || t.name === tags[2] || t.name === tags[3]))   
        
        if (shops.length === 0){
                
            return (
                <div>  
                    <h4>Sorry, we couldn't find anything for that search. Try adding some parameters next time!</h4> 
                    <Link to='/'>Head back to home to try your search again </Link>
                    <ShopForm category={category}/>
                </div>  
            )
        } else { 
            return (
                <Grid columns={2} padded>
                    <Grid.Column  width={10}>
                    {/* <div className='category-container'> */}
                        <h4>results found related to your search:</h4> 
                        <Shops shops={shops} url={this.props.match.url}/>
                    </Grid.Column>

                    <Grid.Column width={5}>
                        <Grid.Row> 
                            <MapContainer shops={shops}/>
                        </Grid.Row>
                        <Grid.Row> 
                            <br/>
                            <ShopForm category={category}/>
                        </Grid.Row>
                    </Grid.Column >
                </Grid>
            )    
        }
    }
}

const mapStateToProps = state => { 
    return {
        categories: state.categoriesReducer.categories
    }
}

export default connect(mapStateToProps)(CategoryContainer)