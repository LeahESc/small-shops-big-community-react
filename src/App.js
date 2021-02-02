import React, { Component } from 'react'
import './App.css';
import HomeSearch from './components/HomeSearch'
import { connect } from 'react-redux'
import fetchCategories from './actions/categoryActions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import CategoryContainer from './containers/CategoryContainer'
import ShopContainer from './containers/ShopContainer'

class App extends Component {
  
   componentDidMount() { 
      this.props.fetchCategories()
      console.log("fetching")
    }
  
  render() { 
    return (
      <Router>
        <div>
        {/* <div className="App"> */}
          <Navbar />
          <HomeSearch fetchCategories={this.props.fetchCategories} categories={this.props.categories} exact path='/' component={HomeSearch}/>
          <Route exact path="/categories/:id/shops" component={CategoryContainer} />
          <Route exact path="/categories/:id/shops/:id" component={ShopContainer} />        
      </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps ,{ fetchCategories })(App);
 


