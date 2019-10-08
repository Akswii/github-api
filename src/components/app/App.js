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
        <div className="ui container">
            <Route exact path="/" component={Home} />
            <Route exact path="/Issues" component={Issues} />
        </div>
    </Router>
);

export default App;
