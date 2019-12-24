import React, { useState } from "react";
import { Menu, Container, Input, Button, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { SearchInput } from "../shared/SearchInput";

export const TopBar: React.FC = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header href="/">
          NewsSite
        </Menu.Item>
        <Menu.Item as="a" href="/">
          Home
        </Menu.Item>
        <Menu.Item as="a" href="/category/business">
          Business
        </Menu.Item>
        <Menu.Item as="a" href="/category/technology">
          Technology
        </Menu.Item>

        <Menu.Item as="a" href="/category/entertainment">
          Entertainment
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <SearchInput />
          </Menu.Item>
          <Menu.Item>
            <a href="https://newsapi.org">Powered by NewsAPI</a>
          </Menu.Item>
        </Menu.Menu>
        <div style={{ float: "right" }}></div>
      </Container>
    </Menu>
  );
};
