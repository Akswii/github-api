import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import IssueCard from "../../components/issue-card";
import { SearchRepo } from "../../components/search";

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

const Issues = () => {
    const { loading, error, data } = useQuery(GET_ISSUES, { variables: { owner: "yarnpkg", name: "yarn" } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>

    const issues = data.repository.issues.nodes;

    return (
        <>
            <div className="ui grid">
                <div className="ui sixteen wide column">
                    <SearchRepo />
                </div>
                {/* <div className="ui sixteen wide column grid">
                    {
                        issues.map((issue, i) => {
                            return (
                                <div className="four wide column" key={issue.id}>
                                    <IssueCard title={issue.title} link={issue.url} />
                                </div>
                            )
                        })
                    }
                </div> */}
            </div>
        </>
    );
}

export default Issues;
