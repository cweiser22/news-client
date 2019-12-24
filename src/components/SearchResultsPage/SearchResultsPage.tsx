import React, { useState } from "react";
import { Grid, Form, Input, Header } from "semantic-ui-react";
import { RouteComponentProps, Route } from "react-router-dom";
import { SearchResultsList } from "./SearchResultsList";
import { SearchInput } from "../shared/SearchInput";

export const SearchResultsPage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  //search contains the query params from the url
  const { search } = props.location;

  //cuts off q= from the url
  const query = search.slice(3, search.length);

  return (
    <Grid container as="main">
      <Grid.Row>
        <Grid.Column width={8}>
          <div className="search-input-container">
            <SearchInput />
          </div>
          <Header as="h1">Search results for '{search}'</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Column width={8}>
        <SearchResultsList query={query} />
      </Grid.Column>
    </Grid>
  );
};
