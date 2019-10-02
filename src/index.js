import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

// Semantic UI styling
import 'semantic-ui-css/semantic.min.css'

import App from "./components/app";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        Authorization: "token 5e576eff68aa824f75f5b5bfb42a350a8026e4fe"
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById("root")
);
