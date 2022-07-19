import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import GlobalStyles from "../../Global/styles/GlobalStyles";
import ResetCss from "../../Global/styles/ResetCss";
import {useQuery} from "@apollo/client";
import {HeaderQuery} from "../../Query/Header";

const Home = () => {
  const {loading, error, data} = useQuery(HeaderQuery);
  // console.log(data.header);

  return (
    <main>
      <ResetCss/>
      <GlobalStyles/>

      {/*{data.header.map((header) => {*/}
      {/*  return (*/}
      {/*    <Header*/}
      {/*      logotype={header.data.attributes.logotype.data.attributes.url}*/}
      {/*      logotypeAlt={header.data.attributes.logotype.data.attributes.alternativeText}*/}
      {/*    />*/}
      {/*  )*/}
      {/*})}*/}

      <Banner text="React Banner"/>
      <Footer text="2021, Jakub Kowalski"/>
    </main>
  );
}

export default Home;
