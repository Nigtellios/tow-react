import config from "../../Connection/config";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import GlobalStyles from "../../Global/styles/GlobalStyles";
import ResetCss from "../../Global/styles/ResetCss";
import {graphqlClient} from "../../Connection/client";
import {useQuery, gql} from "@apollo/client";
import {HeaderQuery} from "../../Query/Header";

export async function getServerSideProps() {
  const { data } = await graphqlClient.query({
    query: HeaderQuery,
  });

  return {
    props: {
      headerData: data.header,
    }
  }
}

const Home = ({ headerData }) => {
  console.log(headerData)

  return (
    <main>
      <ResetCss/>
      <GlobalStyles/>

      {headerData && headerData.map((header) => {
        return (
          <Header
            logotype={`${config.url}${header.data.attributes.logotype.data.attributes.url}`}
            logotypeAlt={header.data.attributes.logotype.data.attributes.alternativeText}
          />
        )
      })}

      <Banner text="React Banner"/>
      <Footer text="2021, Jakub Kowalski"/>
    </main>
  );
}

export default Home;
