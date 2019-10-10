import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { List, Image, Dimmer, Loader, Segment } from "semantic-ui-react"

const FIND_USER = gql`
    query findUser($name: String!){
        search(first: 10, query: $name, type:USER) {
            userCount,
            nodes {
                ...on User {
                    id
                    avatarUrl
                    name
                    login
                    email
                    url
                }
            }
        }
    }
`;

export const SearchResult = props => {
    const { queryString } = props;
    const { loading, error, data } = useQuery(
        FIND_USER,
        {
            variables: { name: queryString },
            skip: !queryString
        }
    );

    if (loading) {
        return (
            <Dimmer active inverted>
                <Loader />
            </Dimmer>
        )
    }
    if (error) { return <p>{error.message}</p> }

    if (!data) { return <p>No data</p> }
    if (!data.search.userCount) { return <p>No user matches {queryString}</p> }

    return (
        <List divided relaxed>
            {data && data.search.nodes.map(user => (
                <List.Item key={user.id}>
                    <Image avatar src={user.avatarUrl} />
                    <List.Content>
                        <List.Header as="a" href={user.url} target="_blank">{user.name ? user.name : ""}</List.Header>
                        <List.Description>{user.login}</List.Description>
                    </List.Content>
                </List.Item>
            ))}
        </List>
    )
};
