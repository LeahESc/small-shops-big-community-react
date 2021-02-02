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
        <div className='app-body'>
        {/* <div className="App"> */}
          <Navbar />
          <Route exact path='/' render={(props) => <HomeSearch {...props} fetchCategories={this.props.fetchCategories} categories={this.props.categories}/>} />
          <Route exact path="/categories/:id/shops" component={CategoryContainer} />
          <Route exact path="/categories/:id/shops/:id" component={ShopContainer} />        
      </div>
      </Router>
    )
  }
}



export default connect(null ,{ fetchCategories })(App);
 


