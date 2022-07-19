import { client } from "../Connection/client"
import { ApolloProvider } from "@apollo/client";
import Home from "./Home/Home";

function App() {
  return (
    <ApolloProvider client={ client }>
      <Home />
    </ApolloProvider>
  );
}

export default App;
