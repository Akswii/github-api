import React from "react";

import IssueCard from "../../components/issue-card";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_ISSUES = gql`
    query RespositoryIssues(){
        repository(owner:"yarnpkg", name:"yarn") {
            issues(first: 5){
                nodes{
                    id,
                    title,
                    bodyText,
                    url
                }
            }
        }
    }
`

const Issues = () => {
    const { loading, error, data } = useQuery(GET_ISSUES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>

    const issues = data.repository.issues.nodes;

    return (
        <>
            {
                issues.map((issue) => <IssueCard key={issue.id} title={issue.title} bodyText={issue.bodyText} link={issue.url} />)
            }
            <IssueCard title="Test" bodyText="Test text" link="test link" />
        </>
    );
}

export default Issues;
