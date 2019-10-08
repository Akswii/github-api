import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";

import { Input, Icon } from "semantic-ui-react";

export const SearchRepo = () => {
    const [userResult, setUserResult] = useState(null);

    const [getUsers, { loading, error }] = useLazyQuery(
        FIND_USER,
        {
            onCompleted: data => {
                console.log(data.search.nodes);
                setUserResult(data.search.nodes);
            }
        }
    );

    if (loading) { return <p>Loading...</p> }
    if (error) { return <p>{error.message}</p> }

    return (
        <>
            <Input
                id="owner-search"
                placeholder='Search...'
                icon={<Icon name='search' inverted circular link onClick={() => getUsers({ variables: { name: document.getElementById("owner-search").value } })} />}
            />
            {userResult && userResult.map(({ name }) => <p>{name}</p>)}
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
