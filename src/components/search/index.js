import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";

import { Input, Icon } from "semantic-ui-react";

export const SearchRepo = () => {
    let searchText = "";

    const [getUsers, { loading, error, data }] = useLazyQuery(FIND_USER);

    if (loading) { return <p>Loading...</p> }
    if (error) { return <p>{error.message}</p> }

    console.log(data);

    return (
        <>
            <Input
                id="owner-search"
                placeholder='Search...'
                icon={<Icon name='search' inverted circular link onClick={() => getUsers({ variables: { name: document.getElementById("owner-search").value } })} />}
            />
        </>
    );
};

const FIND_USER = gql`
    query findUser($name: String!){
        search(first: 10, query: $name, type:USER) {
            userCount,
            nodes {
                ...on User {
                    name
                }
            }
        }
    }
`;
