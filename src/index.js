import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

// Semantic UI styling
import 'semantic-ui-css/semantic.min.css'
import { AUTH_TOKEN } from "./constants";
import App from "./components/app";

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        Authorization: `token ${AUTH_TOKEN}`
    },
    cache,
    resolvers: {}
});

cache.writeData({
    data: {
        active: "home"
    }
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById("root")
);
