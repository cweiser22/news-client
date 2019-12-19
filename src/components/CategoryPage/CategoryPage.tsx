import React, { useEffect, useState } from "react";
import { articlesAPI } from "../../api/articlesAPI";
import { TopHeadlinesResponse, Article } from "../../types";
import { ArticleItem } from "../ListLayout/ArticleItem";
import { ListLayout } from "../ListLayout/ListLayout";

export const CategoryPage: React.FC = (props: any) => {
  //destructure router params from props
  const {
    match: { params }
  } = props;

  //destructure the category param
  const { category } = params;

  const [articles, setArticles] = useState<Article[]>([]);

  //pending variable is true while the request is in progress, used to display loading spinner
  const [pending, setPending] = useState<boolean>(true);

  //error is a string containing an error message, no message is displayed while this value is falsy
  const [error, setError] = useState<string>("");

  //contains side-effects
  useEffect(() => {
    articlesAPI
      .fetchArticlesByCategory(category)
      .then((json: TopHeadlinesResponse) => {
        //update the articles list
        setArticles(json.articles);

        //displays an error if there are no articles in the category
        if (json.articles.length < 1) {
          setError(
            "Sorry, there are no results in the category " +
              params.category +
              "."
          );
        }
        //stop loading spinner
        setPending(false);
      })
      //display the error if the request went wrong
      .catch(e => setError(e));
  });

  return (
    <main>
      <ListLayout
        category={category}
        pending={pending}
        error={error}
        articles={articles}
      />
    </main>
  );
};
