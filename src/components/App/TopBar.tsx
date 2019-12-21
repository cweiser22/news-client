import React from "react";
import { Menu, Container } from "semantic-ui-react";

export const TopBar: React.FC = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header href="/">
          NewsSite
        </Menu.Item>
        <Menu.Item as="a" href="/">
          Top
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
        <div style={{ float: "right" }}></div>
      </Container>
    </Menu>
  );
};
