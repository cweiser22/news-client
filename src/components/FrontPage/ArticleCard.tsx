import React from "react";
import { Article } from "../../types";
import { Card, Image } from "semantic-ui-react";

interface Props {
  article: Article;
}

export const ArticleCard: React.FC<Props> = (props: Props) => {
  const { article } = props;
  return (
    <Card>
      <Card.Content>
        <Image src={article.urlToImage} size="small"></Image>
        <Card.Header>{article.title}</Card.Header>
      </Card.Content>
    </Card>
  );
};
