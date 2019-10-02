import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

// Semantic UI styling
import 'semantic-ui-css/semantic.min.css'

import { AUTH_TOKEN } from "./constants";

import App from "./components/app";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        Authorization: `token ${AUTH_TOKEN}`
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById("root")
);
