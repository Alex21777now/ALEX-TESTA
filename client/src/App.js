import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import GalaxyBackground from './GalaxyBackground'
import Create  from './Components/Create';

function App() {
/*  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );  */
  return (

      <div className="App">
        <Header />
{/*++++++ */ }
{ /* <GalaxyBackground starCount={1000} rotationSpeed={.2}>
      { /*  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alex Testa
          </a>
        </header>
</GalaxyBackground> */ }
    { /*    <Create />  */ }

        <Footer />
      </div>

  );
}

export default App;
