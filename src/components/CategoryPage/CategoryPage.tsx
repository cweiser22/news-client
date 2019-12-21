import React from "react";
import { Container } from "semantic-ui-react";
import { CategoryArticleList } from "./CategoryArticleList";
export const CategoryPage: React.FC = (props: any) => {
  //destructure router params from props
  const {
    match: { params }
  } = props;

  return (
    <main>
      <Container>
        <CategoryArticleList category={params.category} />
      </Container>
    </main>
  );
};
