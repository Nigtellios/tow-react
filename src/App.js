import Header from "./Components/Header/Header";
import Banner from './Components/Banner/Banner';
import Footer from "./Components/Footer/Footer";
import GlobalStyles from "./Global/styles/GlobalStyles";
import ResetCss from "./Global/styles/ResetCss";

function App() {
  return (
    <main>
      <ResetCss/>
      <GlobalStyles/>
      <Header
        logotype="http://localhost:8888/uploads/TOW_Logotype_79f99a22d8.svg"
        logotypeAlt={1}
      />
      <Banner text="React Banner" />
      <Footer text="2021, Jakub Kowalski"/>
    </main>
  );
}

export default App;
