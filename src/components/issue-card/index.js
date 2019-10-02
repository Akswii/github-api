import React from "react";

import { Card } from "semantic-ui-react";

const IssueCard = ({ title, bodyText, link }) => (
    <Card>
        <Card.Content header={title} />
        <Card.Content description={bodyText} />
        <Card.Content extra>
            <a href={link} rel="noopener noreferrer" target="_blank">See on GitHub</a>
        </Card.Content>
    </Card>
);

export default IssueCard;
