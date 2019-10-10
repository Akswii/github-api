import React from "react";

import { gql } from "apollo-boost";
import { SearchBar } from "../../components/search-bar";
import { Segment } from "semantic-ui-react";

const GET_ISSUES = gql`
    query getRepoIssues($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
            issues(last: 5){
                nodes{
                    id,
                    title,
                    bodyText,
                    url
                }
            }
        }
    }
`;

const Issues = () => (
    <>
        <div className="ui grid">
            <div className="ui sixteen wide column">
                <SearchBar />
            </div>
        </div>
    </>
);

export default Issues;
