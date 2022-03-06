import logo from './logo.svg';
import PropTypes from "prop-types";
import Banner from './Components/Banner/Banner';
import Footer from "./Components/Footer/Footer";

Banner.propTypes = {text: PropTypes.string};

function App() {
  return (
    <div className="App">
      <Banner text="React Banner" />
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

      <Footer text="2021, Jakub Kowalski"/>

    </div>
  );
}

export default App;
