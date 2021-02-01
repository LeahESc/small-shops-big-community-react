import React, { Component } from 'react'
import './App.css';
import HomeSearch from './components/HomeSearch'
import { connect } from 'react-redux'
import fetchShops from './actions/categoryActions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import CategoryContainer from './containers/CategoryContainer'
import ShopContainer from './containers/ShopContainer'

class App extends Component {
  
  
  render() { 
    return (
      <Router>
        <div className="App">
          <Navbar />
          <HomeSearch fetchShops={this.props.fetchShops} exact path='/' component={HomeSearch}/>
          <Route exact path="/categories/:id/shops" component={CategoryContainer} />
          <Route exact path="/categories/:id/shops/:id" component={ShopContainer} />
             
      </div>
      </Router>
    )
  }
}


export default connect(null,{ fetchShops })(App);
 


