// import React, { Component } from 'react'
// import './index.css';
import HomeSearch from './containers/HomeSearch'
import { connect } from 'react-redux'
import fetchCategories from './actions/categoryActions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import CategoryContainer from './containers/CategoryContainer'
import ShopContainer from './containers/ShopContainer'
import React, { useEffect } from 'react';

// class App extends Component {
  
const App = (props) => {  
  //  componentDidMount() { 
  //     this.props.fetchCategories()
  //     console.log("fetching")
  //   }

  useEffect( () => { 
      props.fetchCategories()
      console.log("fetching")
  })
  
  // render() { 
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' render={(props) => <HomeSearch {...props} fetchCategories={props.fetchCategories} />} />
          <Route exact path="/categories/:id/shops" component={CategoryContainer} />
          <Route exact path="/categories/:id/shops/:id" component={ShopContainer} />        
        </div>
      </Router>
    )
  }


export default connect(null ,{ fetchCategories })(App);
 


