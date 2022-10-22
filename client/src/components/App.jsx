import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
//components
import Client from "./Client";
import Header from "./Header";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <> <ApolloProvider client={client}>
      <Header />
      <div className="container">       
       <Client/>      
      </div>
      </ApolloProvider>   
    </>
  );
};

export default App;
