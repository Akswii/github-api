import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { Input, Icon } from "semantic-ui-react";

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

const GetSearchResult = props => {
    const { queryString } = props;
    const { loading, error, data } = useQuery(
        FIND_USER,
        {
            variables: { name: queryString },
            skip: !queryString
        }
    );

    if (loading) { return <p>Loading...</p> }
    if (error) { return <p>{error.message}</p> }

    console.log(data);

    if (!data) { return <p>No data</p> }
    if (!data.search.userCount) { return <p>No user matches {queryString}</p> }

    return (
        <>
            {data && data.search.nodes.map((user, i) => {
                console.log(user.name)
                return <p key={i}>{user.name}</p>
            })}
        </>
    )
};

export const SearchRepo = () => {
    const [input, setInput] = useState("");

    return (
        <>
            <Input
                id="owner-search"
                placeholder='Search...'
                icon={<Icon name='search' inverted circular link onClick={() => setInput(document.getElementById("owner-search").value)} />}
            />
            {/* <div className="ui sixteen wide column"> */}
            {input && <GetSearchResult queryString={input} />}
            {/* </div> */}
        </>
    );
};
