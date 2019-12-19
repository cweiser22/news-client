import React from "react";
import { Article } from "../../types";
import { Container, Loader, Grid, Item } from "semantic-ui-react";
import { ErrorMessage } from "./ErrorMessage";
import { ArticleItem } from "./ArticleItem";

interface Props {
  articles: Article[];
  pending: boolean;
  error: string;
  category?: string;
}

//ListLayout is a presentation component for displaying a list of articles, can be reused for different pages
export const ListLayout: React.FC<Props> = (props: Props) => {
  const { articles, pending, error, category } = props;
  const articleItems = articles.map(a => <ArticleItem article={a} />);
  return (
    <main>
      <Container>
        <h1 className="front-text">
          {category
            ? category.slice(0, 1).toUpperCase() +
              category.slice(1, category.length)
            : "All"}
        </h1>
        <Loader active={pending} />
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <ErrorMessage message={error} />

              <Item.Group>{articleItems}</Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </main>
  );
};
