import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Semantic UI components
import TopbarMenu from "../topbar-menu";

// Routes
import Home from "../../routes/Home";
import Issues from "../../routes/Issues";

const App = () => (
    <Router>
        <TopbarMenu />
        <Route exact path="/" component={Home} />
        <Route exact path="/Issues" component={Issues} />
    </Router>
);

export default App;
