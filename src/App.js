import logo from './logo.svg';
import Header from "./Components/Header/Header";
import Banner from './Components/Banner/Banner';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header
        logotype="http://localhost:8888/uploads/TOW_Logotype_79f99a22d8.svg"
        logotypeAlt="Tickets of Wonderland"
      />
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
