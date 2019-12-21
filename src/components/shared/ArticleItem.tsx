import React from "react";
import { Article } from "../../types";
import { Item } from "semantic-ui-react";
import "../FrontPage/FrontPage";
import "./ArticleItem.css";

interface Props {
  article: Article;
}

//ArticleItem displays details of one individual article
export const ArticleItem: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Item className="article-item-container">
        <Item.Image size="small" ui={true} src={props.article.urlToImage} />

        <Item.Content>
          <a href={props.article.url}>
            <Item.Header>{props.article.title}</Item.Header>
          </a>
          <Item.Meta>
            {props.article.author} - {props.article.source.name}
          </Item.Meta>
          <Item.Description>{props.article.description}</Item.Description>
        </Item.Content>
      </Item>
    </React.Fragment>
  );
};
