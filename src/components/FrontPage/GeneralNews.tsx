import React, { useState, useEffect } from "react";
import { Article } from "../../types";
import { Header, Item, Loader, Message } from "semantic-ui-react";
import { articlesAPI } from "../../api/articlesAPI";
import { ArticleItem } from "../shared/ArticleItem";

//General news shows some miscellaneous news on the front page
export const GeneralNews: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pending, setPending] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    async function fetchGeneralNews() {
      try {
        let response = await articlesAPI.fetchArticlesByCategory(
          "general",
          1,
          5
        );
        setPending(false);
        if (response.status != "ok") {
          setErrorMessage("Sorry, failed to fetch news.");
        } else {
          setArticles(response.articles);
          setErrorMessage("");
        }
      } catch (e) {}
    }
    fetchGeneralNews();
  }, []);

  const articleItems = articles.map(a => <ArticleItem article={a} />);
  return (
    <React.Fragment>
      <Header as="h3">General News</Header>
      <Item.Group>{articleItems}</Item.Group>
      <Loader active={pending} />
      <Message hidden={errorMessage == ""} error={true}>
        {errorMessage}
      </Message>
    </React.Fragment>
  );
};
