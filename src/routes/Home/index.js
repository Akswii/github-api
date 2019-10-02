import React from "react";
import { Link } from "react-router-dom";

import { Header } from "semantic-ui-react";

const Home = () => (
    <>
        <Header>Welcome to my GitHub Issue tracker!</Header>
        <p>
            Go to <Link to="Issues">issues</Link> select a repo and get an overview of all issues related to that repo.
        </p>
    </>
);

export default Home;
