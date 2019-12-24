import React, { useState, useEffect } from "react";
import { Item } from "semantic-ui-react";
import { Article } from "../../types";
import { articlesAPI } from "../../api/articlesAPI";
import { ArticleItem } from "../shared/ArticleItem";

interface Props {
  query: string;
}

export const SearchResultsList = (props: Props) => {
  const { query } = props;
  const [results, setResults] = useState<Article[]>([]);
  const [pending, setPending] = useState<boolean>(true);
  //TODO: finish search results page pagination
  const [page, setPage] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(1);
  useEffect(() => {
    async function fetchArticles() {
      try {
        //call the api
        let response = await articlesAPI.fetchSearchResults(query, page, 20);

        //display error if request didn't go well
        if (response.status != "ok") {
          //hides loader
          setPending(false);

          //displays an error
          setErrorMessage(
            "Something went wrong, we couldn't fetch the articles."
          );
          return;
        }

        //clear old error messages
        setErrorMessage("");

        //update totalPages
        setTotalPages(Math.ceil(response.totalResults / 20));

        //hide loading spinner
        setPending(false);

        //finally, display articles
        setResults(response.articles);
      } catch (e) {
        setPending(false);
        setErrorMessage(
          "Something went wrong, we couldn't fetch the articles."
        );
      }
    }
    fetchArticles();
  });

  const searchResultItems = results.map((a, i) => (
    <ArticleItem article={a} key={++i} />
  ));
  if (results.length != 0) {
    return <Item.Group>{searchResultItems}</Item.Group>;
  } else {
    return <p>Sorry, there were no results.</p>;
  }
};
