import React, { useState } from "react";
import { Input, Form } from "semantic-ui-react";

//SearchInput lets users type a search query and then redirects to results on submit
export const SearchInput: React.FC = (props: any) => {
  const [search, setSearch] = useState<string>("");

  function handleSearch() {
    console.log("submitted ");
    setSearch("");
    window.location.href = "/search?q=" + search;
  }

  return (
    <Form onSubmit={handleSearch} style={props.style}>
      <Input
        onChange={e => setSearch(e.target.value)}
        icon="search"
        placeholder="Search..."
      />
      <button style={{ display: "none" }} />
    </Form>
  );
};
