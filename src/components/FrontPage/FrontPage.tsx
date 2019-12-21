import React from "react";
import "./FrontPage.css";
import { Grid, Container, Header } from "semantic-ui-react";
import { GeneralNews } from "./GeneralNews";

export const FrontPage: React.FC = () => {
  return (
    <Grid container as="main">
      <Grid.Row>
        <Grid.Column width={8}>
          {/*This column displays header text and some articles.*/}
          <Container text>
            <Grid>
              <Grid.Row>
                <Grid.Column width={12}>
                  <Header as="h1">NewsSite</Header>
                  <p>
                    Here is where you can get news from a variety of different
                    sources. All news comes from
                    <a href="https://newsapi.org"> https://newsapi.org</a>.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Grid.Column>
        <Grid.Column width={8}>
          <GeneralNews />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
