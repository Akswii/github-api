import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

// Semantic UI components
import { Container } from "semantic-ui-react";

// Custom components
import TopbarMenu from "../topbar-menu";

// Routes
import Home from "../../routes/Home";
import Issues from "../../routes/Issues";

const App = () => (
    <Router>
        <Container>
            <TopbarMenu />
            <Route exact path="/" component={Home} />
            <Route exact path="/Issues" component={Issues} />
        </Container>
    </Router>
);

export default App;
