import React from "react"
import { Link, withRouter } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// Semantic UI components
import { Menu } from "semantic-ui-react"

const GET_ACTIVE = gql`
    {
        active @client
    }
`;

const TopbarMenu = () => {
    const { data, client } = useQuery(GET_ACTIVE);

    const handleItemClick = (e, { name }) => client.writeData({ data: { active: name } });

    return (
        <Menu pointing secondary>
            <div className="ui container">
                <Menu.Item
                    name="home"
                    active={data.active === "home"}
                    onClick={handleItemClick}
                    as={Link}
                    to="/"
                />
                <Menu.Item
                    name="Issues"
                    active={data.active === "Issues"}
                    onClick={handleItemClick}
                    as={Link}
                    to="/Issues"
                />
                <Menu.Menu position="right">
                    <Menu.Item
                        name="logout"
                        active={data.active === "logout"}
                        onClick={handleItemClick}
                    />
                </Menu.Menu>
            </div>
        </Menu>
    )
}

export default withRouter(TopbarMenu);
