import React, { useEffect } from 'react'
import HomeSearch from './containers/HomeSearch'
import fetchCategories from './actions/categoryActions'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CategoryContainer from './containers/CategoryContainer'
import ShopContainer from './containers/ShopContainer'
import { useDispatch } from 'react-redux'

  
const App = (props) => {  
  const dispatch = useDispatch()


  useEffect( () => { 
      // props.fetchCategories()
      dispatch(fetchCategories())
      console.log("fetching")
  })
  
  // render() { 
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' render={(props) => <HomeSearch {...props} />} />
          <Route exact path="/categories/:id/shops" component={CategoryContainer} />
          <Route exact path="/categories/:id/shops/:id" component={ShopContainer} />        
        </div>
      </Router>
    )
  }

export default App;
 


//  I used to pass fetchCategories={props.fetchCategories}  to HomeSearch component but I no longer need to now that I'm using Redux hooks (I think?)
//  no longer need to use connect(null ,{ fetchCategories })
// import { connect } from 'react-redux'