import React, { useState } from "react";

import { Input, Icon, Segment } from "semantic-ui-react";
import { SearchResult } from "../search-result";

export const SearchBar = () => {
    const [input, setInput] = useState("");

    return (
        <>
            <Input
                id="owner-search"
                placeholder='Search...'
                icon={<Icon name='search' inverted circular link onClick={() => setInput(document.getElementById("owner-search").value)} />}
            />
            <Segment>
                {input && <SearchResult queryString={input} />}
            </Segment>
        </>
    );
};
