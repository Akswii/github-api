import React, { useState } from 'react'
import { Link } from "react-router-dom";

// Semantic UI components
import { Menu } from 'semantic-ui-react'

const TopbarMenu = () => {
    const [activeItem, setActive] = useState("home");

    const handleItemClick = (e, { name }) => setActive(name);

    return (
        <Menu pointing secondary>
            <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={handleItemClick}
                as={Link}
                to="/"
            />
            <Menu.Item
                name="Issues"
                active={activeItem === "Issues"}
                onClick={handleItemClick}
                as={Link}
                to="/Issues"
            />
            <Menu.Menu position="right">
                <Menu.Item
                    name="logout"
                    active={activeItem === "logout"}
                    onClick={handleItemClick}
                />
            </Menu.Menu>
        </Menu>
    )
}

export default TopbarMenu;
