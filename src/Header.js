import logo from './logo.svg';
import './App.css';

function Header(){
    return(
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>ReactFacts</h3>
      <h4>ReactProject</h4>
      </header>
    )
  }

export default Header;
