import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import HomeSearch from './components/HomeSearch'

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>SMALL SHOPS</h1>
        <h2>BIG COMMUNITY!</h2>
        <h4>Start your search by typing in the kind of business you'd like to patronize and select the parameters of businesses you'd like to support</h4>
        <HomeSearch />
        </header>
    </div>
  );
}


export default connect()(App);
